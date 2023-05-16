    const express = require('express');
const router = express.Router();
const productController = require("../controllers/product.controller");
const upload = require('../middlewares/fileUpload.middleware');


router.get('/', productController.getAllProducts);

router.get('/:id', (req, res) => {
  // Logic to fetch a single product by its ID
});

router.post('/', upload.single('imageUrl'), productController.addProduct);

module.exports = router;
