const Product = require('../models/product.model');

exports.getAllProducts = (req, res) => {
  const products = Product.getSampleProducts();
  res.json(products);
};