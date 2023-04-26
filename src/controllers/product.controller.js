const Product = require('../models/product.model');

exports.getAllProducts = (req, res) => {
  const products = Product.getSampleProducts();
  res.json(products);
};

exports.addProduct = (req, res)=>{
    const { name, price, sizes } = req.body;
    const newProduct = {
        name,
        price: parseFloat(price),
        sizes: sizes.split(','),
        imageUrl:req.file.filename
    };

    const addedProduct = Product.add(newProduct);

    res.status(201).json({
        message: 'Product added successfully',
        product: addedProduct
    });
}