const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
  // Logic to fetch all products
});

router.get('/products/:id', (req, res) => {
  // Logic to fetch a single product by its ID
});

router.post('/products', (req, res) => {
  // Logic to create a new product
});

module.exports = router;
