    const express = require('express');
const router = express.Router();
const productController = require("../controllers/product.controller");

router.get('/', productController.getAllProducts);

router.get('/:id', (req, res) => {
  // Logic to fetch a single product by its ID
});

router.post('/', (req, res) => {
  // Logic to create a new product
});

module.exports = router;
