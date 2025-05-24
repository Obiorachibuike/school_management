
const express = require('express');
const bodyParser = require('body-parser');
const createSchoolsTable = require('./createTables.js');
const schoolRoutes = require('./routes.js');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.send('School API is running');
});

// Ensure schools table exists
createSchoolsTable();

// Routes
app.use('/', schoolRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\nGracefully shutting down...');
  require('./db').end(err => {
    if (err) {
      console.error('Error closing DB connection:', err);
      process.exit(1);
    }
    console.log('DB connection closed');
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  });
});