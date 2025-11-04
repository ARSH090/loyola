const bcrypt = require('bcrypt');
const { db } = require('../config/database');
const { logActivity } = require('../utils/logger');

/**
 * Get all users
 */
exports.getAllUsers = (req, res, next) => {
  try {
    const users = db.prepare(`
      SELECT id, username, email, role, created_at, last_login, is_active
      FROM users
      ORDER BY created_at DESC
    `).all();

    res.json({
      success: true,
      data: { users, count: users.length }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get user by ID
 */
exports.getUserById = (req, res, next) => {
  try {
    const { id } = req.params;

    const user = db.prepare(`
      SELECT id, username, email, role, created_at, last_login, is_active
      FROM users WHERE id = ?
    `).get(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      data: { user }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Create new user
 */
exports.createUser = async (req, res, next) => {
  try {
    const { username, email, password, role = 'admin' } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const result = db.prepare(`
      INSERT INTO users (username, email, password, role)
      VALUES (?, ?, ?, ?)
    `).run(username, email, hashedPassword, role);

    logActivity(req.user.id, 'USER_CREATE', `Created user: ${username}`, req.ip);

    res.status(201).json({
      success: true,
      message: 'User created successfully',
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
 * Update user
 */
exports.updateUser = (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, email, role, is_active } = req.body;

    const updates = [];
    const params = [];

    if (username) {
      updates.push('username = ?');
      params.push(username);
    }
    if (email) {
      updates.push('email = ?');
      params.push(email);
    }
    if (role) {
      updates.push('role = ?');
      params.push(role);
    }
    if (is_active !== undefined) {
      updates.push('is_active = ?');
      params.push(is_active ? 1 : 0);
    }

    if (updates.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No updates provided'
      });
    }

    params.push(id);

    db.prepare(`UPDATE users SET ${updates.join(', ')} WHERE id = ?`)
      .run(...params);

    logActivity(req.user.id, 'USER_UPDATE', `Updated user ID: ${id}`, req.ip);

    res.json({
      success: true,
      message: 'User updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete user
 */
exports.deleteUser = (req, res, next) => {
  try {
    const { id } = req.params;

    if (parseInt(id) === req.user.id) {
      return res.status(400).json({
        success: false,
        message: 'Cannot delete your own account'
      });
    }

    db.prepare('DELETE FROM users WHERE id = ?').run(id);

    logActivity(req.user.id, 'USER_DELETE', `Deleted user ID: ${id}`, req.ip);

    res.json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
