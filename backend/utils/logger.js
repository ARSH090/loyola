const { db } = require('../config/database');

/**
 * Log activity to database
 */
function logActivity(userId, action, details = null, ipAddress = null) {
  try {
    db.prepare(`
      INSERT INTO activity_logs (user_id, action, details, ip_address)
      VALUES (?, ?, ?, ?)
    `).run(userId, action, details, ipAddress);
  } catch (error) {
    console.error('Failed to log activity:', error);
  }
}

/**
 * Console logger with timestamp
 */
function log(level, message, data = null) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
  
  console.log(logMessage);
  if (data) {
    console.log(JSON.stringify(data, null, 2));
  }
}

module.exports = {
  logActivity,
  log
};
