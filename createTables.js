const db = require('./db');

async function createSchoolsTable() {
  try {
    const query = `
      CREATE TABLE IF NOT EXISTS schools (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        location VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    await db.query(query); // no callback here!
    console.log('Schools table ensured');
  } catch (error) {
    console.error('Error creating schools table:', error);
  }
}

module.exports = createSchoolsTable;