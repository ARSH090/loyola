const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { registerValidation, loginValidation, validate } = require('../middleware/validation');

// POST /api/auth/register - Register new admin (first time only)
router.post('/register', registerValidation, validate, authController.register);

// POST /api/auth/login - Login admin
router.post('/login', loginValidation, validate, authController.login);

// POST /api/auth/logout - Logout admin
router.post('/logout', authController.logout);

// GET /api/auth/verify - Verify token
router.get('/verify', authController.verifyToken);

module.exports = router;
