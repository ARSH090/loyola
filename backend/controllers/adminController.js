const bcrypt = require('bcrypt');
const { db } = require('../config/database');
const { logActivity } = require('../utils/logger');

/**
 * Get admin profile
 */
exports.getProfile = (req, res, next) => {
  try {
    const user = db.prepare(`
      SELECT id, username, email, role, created_at, last_login
      FROM users WHERE id = ?
    `).get(req.user.id);

    res.json({
      success: true,
      data: { user }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update admin profile
 */
exports.updateProfile = (req, res, next) => {
  try {
    const { email, username } = req.body;
    const updates = [];
    const params = [];

    if (email) {
      updates.push('email = ?');
      params.push(email);
    }
    if (username) {
      updates.push('username = ?');
      params.push(username);
    }

    if (updates.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No updates provided'
      });
    }

    params.push(req.user.id);

    db.prepare(`UPDATE users SET ${updates.join(', ')} WHERE id = ?`)
      .run(...params);

    logActivity(req.user.id, 'PROFILE_UPDATE', 'Profile updated', req.ip);

    res.json({
      success: true,
      message: 'Profile updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Change password
 */
exports.changePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;

    // Get current password hash
    const user = db.prepare('SELECT password FROM users WHERE id = ?')
      .get(req.user.id);

    // Verify current password
    const isValid = await bcrypt.compare(currentPassword, user.password);
    if (!isValid) {
      return res.status(401).json({
        success: false,
        message: 'Current password is incorrect'
      });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 12);

    // Update password
    db.prepare('UPDATE users SET password = ? WHERE id = ?')
      .run(hashedPassword, req.user.id);

    logActivity(req.user.id, 'PASSWORD_CHANGE', 'Password changed', req.ip);

    res.json({
      success: true,
      message: 'Password changed successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get dashboard statistics
 */
exports.getDashboardStats = (req, res, next) => {
  try {
    const totalUsers = db.prepare('SELECT COUNT(*) as count FROM users').get();
    const totalContent = db.prepare('SELECT COUNT(*) as count FROM content').get();
    const recentLogs = db.prepare('SELECT COUNT(*) as count FROM activity_logs WHERE timestamp > datetime("now", "-7 days")').get();
    
    const contentByType = db.prepare(`
      SELECT type, COUNT(*) as count
      FROM content
      GROUP BY type
    `).all();

    res.json({
      success: true,
      data: {
        totalUsers: totalUsers.count,
        totalContent: totalContent.count,
        recentActivity: recentLogs.count,
        contentByType
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all users (superadmin only)
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
      data: { users }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete user (superadmin only)
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
