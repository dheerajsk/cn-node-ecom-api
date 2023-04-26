class Product {
    constructor(id, name, description, price, sizes,imageUrl, category) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.sizes = sizes;
      this.imageUrl = imageUrl;
      this.category=category;
    }

    static add(product) {
      product.id = products.length + 1;
      products.push(product);
      return product;
    }

    static getProductById(id) {
      const product = products.find((p) => p.id == id);
      return product;
    }  

    static getSampleProducts() {
        return products;
      }

      static rateProduct(productId, userId, rating) {
        // Find the product by productId
        const product = Product.getProductById(productId);
        if (!product) {
          throw new Error('Product not found');
        }
      
        // Check if the user has already rated the product
        const existingRating = product.ratings && product.ratings.find(r => r.userId === userId);
      
        // If not, add the rating to the ratings array
        if (!existingRating) {
          product.ratings=[];
          product.ratings.push({ userId, rating });
        } else {
          // If yes, update the existing rating
          existingRating.rating = rating;
        }
      
        // Save the product
        const index = products.findIndex(p=> p.id==productId);
        products[index]=product;
        return product;
      }

      static filterProducts(minPrice, maxPrice, category) {
        return products.filter(
          (product) =>
            (minPrice === undefined || product.price >= minPrice) &&
            (maxPrice === undefined || product.price <= maxPrice) &&
            (category === undefined || product.category == category)
        );
      }
      
  }

  var products=[  
    new Product(1, 'Sample Product 1', 'This is a sample product.', 10.99, ['XS', 'S', 'M', 'L', 'XL'], null, "Electronics"),
      new Product(2, 'Sample Product 2', 'This is another sample product.', 15.99, ['M', 'L', 'XL'], "Clothing"),
]
  
  module.exports = Product;