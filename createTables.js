// createTable.js
const db = require('./db');

function createSchoolsTable() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS schools (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      latitude FLOAT NOT NULL,
      longitude FLOAT NOT NULL
    )
  `;

  db.query(createTableQuery, (err) => {
    if (err) {
      console.error('Error creating schools table:', err);
    } else {
      console.log('Schools table is ready.');
    }
  });
}

module.exports = createSchoolsTable;
