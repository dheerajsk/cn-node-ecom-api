class Product {
    constructor(id, name, description, price, sizes,imageUrl) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.sizes = sizes;
      this.imageUrl = imageUrl;
    }

    static add(product) {
      product.id = products.length + 1;
      products.push(product);
      return product;
    }

    static getSampleProducts() {
        return products;
      }
      
  }

  var products=[  new Product(1, 'Sample Product 1', 'This is a sample product.', 10.99, ['XS', 'S', 'M', 'L', 'XL']),
      new Product(2, 'Sample Product 2', 'This is another sample product.', 15.99, ['M', 'L', 'XL']),
]
  
  module.exports = Product;