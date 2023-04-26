const Product = require('../models/product.model');

exports.getAllProducts = (req, res) => {
  const products = Product.getSampleProducts();
  res.json(products);
};

exports.getProduct = (req, res) => {
  const productId = req.params.id;
  console.log(productId)
  const product = Product.getProductById(productId);
  console.log(product);
  res.json(product);
};

exports.filterProducts = (req, res) => {
  const minPrice = req.query.min;
  const maxPrice = req.query.max;
  const category = req.query.category;

  const filteredProducts = Product.filterProducts(minPrice, maxPrice, category);
  res.status(200).json({ products: filteredProducts });
};

exports.rateProduct = (req, res) => {
  const { productId } = req.params;
  const { rating } = req.body;

  try{
    Product.rateProduct(productId, 1, rating)
  }catch(err){
    console.log(err);
    res.status(400).send(err)
  }
  
  res.status(200).send();
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