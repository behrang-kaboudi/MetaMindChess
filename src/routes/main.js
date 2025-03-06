const express = require('express');
const router = express.Router();

// Define a route that renders a simple view
router.get('/', (req, res) => {
  res.render('index', { title: 'Home Page', message: 'Hello, welcome to our site!' });
});

module.exports = router;
