const db = require('./db');

async function createSchoolsTable() {
  try {
    // Create the table if it doesn't exist
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS schools (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        latitude DOUBLE,
        longitude DOUBLE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    await db.query(createTableQuery);
    console.log('Schools table ensured');

    // Check if 'address' column exists
    const [columns] = await db.query(`SHOW COLUMNS FROM schools LIKE 'address'`);
    if (columns.length === 0) {
      // Add the 'address' column if it doesn't exist
      await db.query(`ALTER TABLE schools ADD COLUMN address VARCHAR(255)`);
      console.log('Address column added to schools table');
    }
  } catch (error) {
    console.error('Error creating or updating schools table:', error);
  }
}

module.exports = createSchoolsTable;