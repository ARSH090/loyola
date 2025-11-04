const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

// All routes require authentication
router.use(authenticateToken);

// GET /api/admin/profile - Get admin profile
router.get('/profile', adminController.getProfile);

// PUT /api/admin/profile - Update admin profile
router.put('/profile', adminController.updateProfile);

// PUT /api/admin/password - Change password
router.put('/password', adminController.changePassword);

// GET /api/admin/dashboard - Get dashboard stats
router.get('/dashboard', adminController.getDashboardStats);

// Superadmin only routes
router.get('/users', authorizeRole('superadmin'), adminController.getAllUsers);
router.delete('/users/:id', authorizeRole('superadmin'), adminController.deleteUser);

module.exports = router;
