const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, // Add port from .env
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Optional: test connection on startup
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to MySQL database (pool)');
    connection.release();
  } catch (err) {
    console.error('MySQL pool connection error:', err.message);
    process.exit(1); // Exit app if DB connection fails
  }
})();

module.exports = pool;