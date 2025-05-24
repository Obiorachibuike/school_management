const express = require('express');
const router = express.Router();
const db = require('./db');

// Utility function to calculate distance
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// POST /addSchool
router.post('/addSchool', (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (
    typeof name !== 'string' ||
    typeof address !== 'string' ||
    isNaN(parseFloat(latitude)) ||
    isNaN(parseFloat(longitude))
  ) {
    return res.status(400).json({ message: 'Invalid input data' });
  }

  const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
  db.query(query, [name, address, latitude, longitude], (err, result) => {
    if (err) {
      console.error('Insert Error:', err);
      return res.status(500).json({ message: 'Database insert error' });
    }
    res.status(201).json({ message: 'School added successfully', id: result.insertId });
  });
});

// GET /listSchools
router.get('/listSchools', (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ message: 'Latitude and Longitude are required' });
  }

  const query = 'SELECT * FROM schools';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Query Error:', err);
      return res.status(500).json({ message: 'Database query error' });
    }

    const schools = results.map(school => {
      const distance = calculateDistance(
        parseFloat(latitude),
        parseFloat(longitude),
        school.latitude,
        school.longitude
      );
      return { ...school, distance };
    });

    schools.sort((a, b) => a.distance - b.distance);

    res.status(200).json(schools);
  });
});

module.exports = router;