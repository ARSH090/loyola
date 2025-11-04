const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { db } = require('../config/database');
const { logActivity } = require('../utils/logger');

/**
 * Register first admin (one-time setup)
 */
exports.register = async (req, res, next) => {
  try {
    const { username, email, password, role = 'admin' } = req.body;

    // Check if any admin exists (prevent multiple registrations)
    const existingAdmin = db.prepare('SELECT COUNT(*) as count FROM users').get();
    if (existingAdmin.count > 0) {
      return res.status(400).json({
        success: false,
        message: 'Admin already exists. Contact superadmin to create additional users.'
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create admin
    const result = db.prepare(`
      INSERT INTO users (username, email, password, role)
      VALUES (?, ?, ?, ?)
    `).run(username, email, hashedPassword, role);

    logActivity(result.lastInsertRowid, 'REGISTER', `Admin account created: ${username}`, req.ip);

    res.status(201).json({
      success: true,
      message: 'Admin account created successfully',
      data: { id: result.lastInsertRowid, username, email, role }
    });
  } catch (error) {
    if (error.code === 'SQLITE_CONSTRAINT') {
      return res.status(400).json({
        success: false,
        message: 'Username or email already exists'
      });
    }
    next(error);
  }
};

/**
 * Login admin
 */
exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Find user
    const user = db.prepare('SELECT * FROM users WHERE username = ? AND is_active = 1')
      .get(username);

    if (!user) {
      logActivity(null, 'LOGIN_FAILED', `Failed login attempt for username: ${username}`, req.ip);
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      logActivity(user.id, 'LOGIN_FAILED', `Invalid password for username: ${username}`, req.ip);
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Update last login
    db.prepare('UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = ?')
      .run(user.id);

    logActivity(user.id, 'LOGIN_SUCCESS', `User logged in: ${username}`, req.ip);

    res.json({
      success: true,
      message: 'Login successful',
      data: {
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Logout admin
 */
exports.logout = (req, res) => {
  // In a stateless JWT system, logout is handled client-side by removing the token
  // Optionally, implement token blacklisting here
  res.json({
    success: true,
    message: 'Logout successful'
  });
};

/**
 * Verify token
 */
exports.verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'No token provided'
      });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: 'Invalid or expired token'
        });
      }

      const user = db.prepare('SELECT id, username, email, role FROM users WHERE id = ? AND is_active = 1')
        .get(decoded.userId);

      if (!user) {
        return res.status(403).json({
          success: false,
          message: 'User not found'
        });
      }

      res.json({
        success: true,
        data: { user }
      });
    });
  } catch (error) {
    next(error);
  }
};
