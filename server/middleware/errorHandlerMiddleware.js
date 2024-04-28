const logger = require('../config/logger');

function errorHandler(err, req, res, next) {
  logger.error(err.stack);
  res.status(500).send('Something went wrong!');
}

module.exports = { errorHandler };
