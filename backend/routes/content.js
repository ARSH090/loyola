const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');
const { authenticateToken, authorizeRole } = require('../middleware/auth');
const { contentValidation, validate } = require('../middleware/validation');
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Only image files are allowed'));
  }
});

// Public routes (no auth required)
router.get('/', contentController.getAllContent);
router.get('/:id', contentController.getContentById);
router.get('/type/:type', contentController.getContentByType);

// Protected routes (require authentication)
router.post('/', authenticateToken, authorizeRole('admin', 'superadmin', 'editor'), contentValidation, validate, contentController.createContent);
router.put('/:id', authenticateToken, authorizeRole('admin', 'superadmin', 'editor'), contentController.updateContent);
router.delete('/:id', authenticateToken, authorizeRole('admin', 'superadmin'), contentController.deleteContent);

// File upload route
router.post('/upload', authenticateToken, authorizeRole('admin', 'superadmin', 'editor'), upload.single('image'), contentController.uploadImage);

module.exports = router;
