const jwt = require('jsonwebtoken');
const { db } = require('../config/database');

/**
 * Verify JWT token and attach user to request
 */
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ 
      success: false, 
      message: 'Access token required' 
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ 
        success: false, 
        message: 'Invalid or expired token' 
      });
    }

    // Check if user still exists and is active
    const user = db.prepare('SELECT id, username, email, role, is_active FROM users WHERE id = ?')
      .get(decoded.userId);

    if (!user || !user.is_active) {
      return res.status(403).json({ 
        success: false, 
        message: 'User account not found or inactive' 
      });
    }

    req.user = user;
    next();
  });
};

/**
 * Check if user has required role
 */
const authorizeRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ 
        success: false, 
        message: 'Authentication required' 
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ 
        success: false, 
        message: 'Insufficient permissions' 
      });
    }

    next();
  };
};

module.exports = {
  authenticateToken,
  authorizeRole
};
