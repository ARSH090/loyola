const express = require('express');
const router = express.Router();
const logController = require('../controllers/logController');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

// All routes require authentication and admin role
router.use(authenticateToken);
router.use(authorizeRole('admin', 'superadmin'));

// GET /api/logs - Get all activity logs
router.get('/', logController.getAllLogs);

// GET /api/logs/user/:userId - Get logs for specific user
router.get('/user/:userId', logController.getLogsByUser);

// GET /api/logs/analytics - Get analytics data
router.get('/analytics', logController.getAnalytics);

module.exports = router;
