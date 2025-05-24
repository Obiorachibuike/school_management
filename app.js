const express = require('express');
const bodyParser = require('body-parser');
const createSchoolsTable = require('./createSchoolsTable.js');
const schoolRoutes = require('./routes.js'); // your routes
const db = require('./db');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('School API is running');
});

// Ensure table exists before starting server
(async () => {
  try {
    await createSchoolsTable();
    console.log('Schools table checked/created');

    const PORT = process.env.PORT || 5000;
    const server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    // Graceful shutdown
    process.on('SIGINT', async () => {
      console.log('\nGracefully shutting down...');
      try {
        await db.end();  // close connection pool
        server.close(() => {
          console.log('Server closed');
          process.exit(0);
        });
      } catch (err) {
        console.error('Error closing DB pool:', err);
        process.exit(1);
      }
    });

  } catch (err) {
    console.error('Error creating schools table:', err);
    process.exit(1);
  }
})();

app.use('/', schoolRoutes);