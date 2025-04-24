const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
require('dotenv').config();  // To use environment variables

const app = express();
app.use(bodyParser.json());

// MySQL connection using environment variables
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Add School API (POST /addSchool)
app.post('/addSchool', (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  // Validate inputs
  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
  db.query(query, [name, address, latitude, longitude], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error inserting data into the database' });
    }
    res.status(201).json({ message: 'School added successfully', id: result.insertId });
  });
});

// List Schools API (GET /listSchools)
app.get('/listSchools', (req, res) => {
  const { latitude, longitude } = req.query;

  // Ensure latitude and longitude are provided
  if (!latitude || !longitude) {
    return res.status(400).json({ message: 'Latitude and Longitude are required' });
  }

  const query = 'SELECT id, name, address, latitude, longitude FROM schools';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error retrieving schools from the database' });
    }

    // Calculate distance from user's location and add it to the result
    const schools = results.map(school => {
      const distance = calculateDistance(
        parseFloat(latitude), parseFloat(longitude),
        school.latitude, school.longitude
      );
      return { ...school, distance };
    });

    // Sort schools by distance
    schools.sort((a, b) => a.distance - b.distance);

    res.status(200).json(schools);
  });
});

// Function to calculate the distance between two geographical coordinates (Haversine formula)
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance;
}

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
