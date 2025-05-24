const express = require('express');
const bodyParser = require('body-parser');
const createSchoolsTable = require('./createTables.js');
const db = require('./db');
const schoolRoutes = require('./routes.js');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.send('School API is running');
});

// Ensure schools table exists (now async)
(async () => {
  try {
    await createSchoolsTable();
    console.log('Schools table checked/created');
  } catch (err) {
    console.error('Error creating schools table:', err);
    process.exit(1);
  }
})();

// Routes
app.use('/', schoolRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\nGracefully shutting down...');
  try {
    await db.end();
    console.log('DB pool closed');
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  } catch (err) {
    console.error('Error closing DB pool:', err);
    process.exit(1);
  }
});