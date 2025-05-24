const db = require('./db');

async function createSchoolsTable() {
  try {
    const query = `
      CREATE TABLE IF NOT EXISTS schools (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255),
        latitude DOUBLE,
        longitude DOUBLE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    await db.query(query);
    console.log('Schools table ensured');
  } catch (error) {
    console.error('Error creating schools table:', error);
  }
}

module.exports = createSchoolsTable;