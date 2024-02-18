const express = require('express');
const logger = require('./config/logger');
const routes = require('./routes/textRoute'); // Updated import
const { connectToDatabase } = require('./config/db');
const { requestLogger } = require('./middleware/loggerMiddleware');
const { errorHandler } = require('./middleware/errorHandlerMiddleware');

const app = express();

// Set port from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Middleware
app.use(express.json());
app.use(requestLogger); // Logger middleware

// Routes
app.use('/api', routes); // Updated endpoint

// Error handling middleware
app.use(errorHandler);

// Start the server
startServer();

// Start the server
async function startServer() {
  try {
    await connectToDatabase();
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    logger.error('Error starting server:', err.message);
    process.exit(1); // Exit the process with a non-zero status code
  }
}

module.exports = app; // Export the app object
