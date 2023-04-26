    const express = require('express');
const router = express.Router();
const productController = require("../controllers/product.controller");
const upload = require('../middlewares/fileUpload.middleware');

router.get('/', productController.getAllProducts);

router.get('/filter', productController.filterProducts);
router.get('/:id', productController.getProduct);


router.post('/', upload.single('imageUrl'), productController.addProduct);

module.exports = router;
