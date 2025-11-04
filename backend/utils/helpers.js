/**
 * Sanitize user input to prevent XSS
 */
function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  return input.replace(/[<>]/g, '');
}

/**
 * Generate random string
 */
function generateRandomString(length = 32) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Format date to readable string
 */
function formatDate(date) {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

/**
 * Paginate results
 */
function paginate(array, page = 1, limit = 10) {
  const offset = (page - 1) * limit;
  return {
    data: array.slice(offset, offset + limit),
    pagination: {
      page,
      limit,
      total: array.length,
      totalPages: Math.ceil(array.length / limit)
    }
  };
}

module.exports = {
  sanitizeInput,
  generateRandomString,
  formatDate,
  paginate
};
