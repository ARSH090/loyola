const { db } = require('../config/database');
const { logActivity } = require('../utils/logger');

/**
 * Get all content
 */
exports.getAllContent = (req, res, next) => {
  try {
    const { type, limit = 50, offset = 0 } = req.query;

    let query = `
      SELECT c.*, u.username as author_name
      FROM content c
      LEFT JOIN users u ON c.author_id = u.id
    `;

    const params = [];

    if (type) {
      query += ' WHERE c.type = ?';
      params.push(type);
    }

    query += ' ORDER BY c.created_at DESC LIMIT ? OFFSET ?';
    params.push(parseInt(limit), parseInt(offset));

    const content = db.prepare(query).all(...params);

    res.json({
      success: true,
      data: { content, count: content.length }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get content by ID
 */
exports.getContentById = (req, res, next) => {
  try {
    const { id } = req.params;

    const content = db.prepare(`
      SELECT c.*, u.username as author_name
      FROM content c
      LEFT JOIN users u ON c.author_id = u.id
      WHERE c.id = ?
    `).get(id);

    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    res.json({
      success: true,
      data: { content }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get content by type
 */
exports.getContentByType = (req, res, next) => {
  try {
    const { type } = req.params;

    const content = db.prepare(`
      SELECT c.*, u.username as author_name
      FROM content c
      LEFT JOIN users u ON c.author_id = u.id
      WHERE c.type = ?
      ORDER BY c.created_at DESC
    `).all(type);

    res.json({
      success: true,
      data: { content, count: content.length }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Create content
 */
exports.createContent = (req, res, next) => {
  try {
    const { title, body, type, image_url } = req.body;

    const result = db.prepare(`
      INSERT INTO content (title, body, type, author_id, image_url)
      VALUES (?, ?, ?, ?, ?)
    `).run(title, body, type, req.user.id, image_url || null);

    logActivity(req.user.id, 'CONTENT_CREATE', `Created ${type}: ${title}`, req.ip);

    res.status(201).json({
      success: true,
      message: 'Content created successfully',
      data: { id: result.lastInsertRowid }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update content
 */
exports.updateContent = (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, body, type, image_url } = req.body;

    const updates = [];
    const params = [];

    if (title) {
      updates.push('title = ?');
      params.push(title);
    }
    if (body) {
      updates.push('body = ?');
      params.push(body);
    }
    if (type) {
      updates.push('type = ?');
      params.push(type);
    }
    if (image_url !== undefined) {
      updates.push('image_url = ?');
      params.push(image_url);
    }

    updates.push('updated_at = CURRENT_TIMESTAMP');
    params.push(id);

    db.prepare(`UPDATE content SET ${updates.join(', ')} WHERE id = ?`)
      .run(...params);

    logActivity(req.user.id, 'CONTENT_UPDATE', `Updated content ID: ${id}`, req.ip);

    res.json({
      success: true,
      message: 'Content updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete content
 */
exports.deleteContent = (req, res, next) => {
  try {
    const { id } = req.params;

    db.prepare('DELETE FROM content WHERE id = ?').run(id);

    logActivity(req.user.id, 'CONTENT_DELETE', `Deleted content ID: ${id}`, req.ip);

    res.json({
      success: true,
      message: 'Content deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Upload image
 */
exports.uploadImage = (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded'
      });
    }

    const imageUrl = `/uploads/${req.file.filename}`;

    logActivity(req.user.id, 'IMAGE_UPLOAD', `Uploaded image: ${req.file.filename}`, req.ip);

    res.json({
      success: true,
      message: 'Image uploaded successfully',
      data: { imageUrl }
    });
  } catch (error) {
    next(error);
  }
};
