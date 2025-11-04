const { db } = require('../config/database');

/**
 * Get all activity logs
 */
exports.getAllLogs = (req, res, next) => {
  try {
    const { limit = 100, offset = 0 } = req.query;

    const logs = db.prepare(`
      SELECT l.*, u.username
      FROM activity_logs l
      LEFT JOIN users u ON l.user_id = u.id
      ORDER BY l.timestamp DESC
      LIMIT ? OFFSET ?
    `).all(parseInt(limit), parseInt(offset));

    res.json({
      success: true,
      data: { logs, count: logs.length }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get logs by user
 */
exports.getLogsByUser = (req, res, next) => {
  try {
    const { userId } = req.params;
    const { limit = 100 } = req.query;

    const logs = db.prepare(`
      SELECT * FROM activity_logs
      WHERE user_id = ?
      ORDER BY timestamp DESC
      LIMIT ?
    `).all(userId, parseInt(limit));

    res.json({
      success: true,
      data: { logs, count: logs.length }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get analytics data
 */
exports.getAnalytics = (req, res, next) => {
  try {
    // Total actions by type
    const actionsByType = db.prepare(`
      SELECT action, COUNT(*) as count
      FROM activity_logs
      GROUP BY action
      ORDER BY count DESC
    `).all();

    // Activity over last 7 days
    const recentActivity = db.prepare(`
      SELECT DATE(timestamp) as date, COUNT(*) as count
      FROM activity_logs
      WHERE timestamp > datetime('now', '-7 days')
      GROUP BY DATE(timestamp)
      ORDER BY date ASC
    `).all();

    // Most active users
    const activeUsers = db.prepare(`
      SELECT u.username, COUNT(l.id) as action_count
      FROM activity_logs l
      LEFT JOIN users u ON l.user_id = u.id
      WHERE l.timestamp > datetime('now', '-30 days')
      GROUP BY l.user_id
      ORDER BY action_count DESC
      LIMIT 10
    `).all();

    res.json({
      success: true,
      data: {
        actionsByType,
        recentActivity,
        activeUsers
      }
    });
  } catch (error) {
    next(error);
  }
};
