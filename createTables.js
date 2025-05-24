const db = require('./db');

async function createSchoolsTable() {
  try {
    await db.query(`DROP TABLE IF EXISTS schools`);

    const query = `
      CREATE TABLE schools (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255),
        latitude DOUBLE,
        longitude DOUBLE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    await db.query(query);
    console.log('Schools table dropped and recreated');
  } catch (error) {
    console.error('Error recreating schools table:', error);
  }
}

module.exports = createSchoolsTable;