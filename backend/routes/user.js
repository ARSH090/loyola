const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

// All routes require authentication and admin role
router.use(authenticateToken);
router.use(authorizeRole('admin', 'superadmin'));

// GET /api/users - Get all users
router.get('/', userController.getAllUsers);

// GET /api/users/:id - Get user by ID
router.get('/:id', userController.getUserById);

// POST /api/users - Create new user
router.post('/', userController.createUser);

// PUT /api/users/:id - Update user
router.put('/:id', userController.updateUser);

// DELETE /api/users/:id - Delete user
router.delete('/:id', authorizeRole('superadmin'), userController.deleteUser);

module.exports = router;
