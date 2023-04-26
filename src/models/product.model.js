class Product {
    constructor(id, name, description, price, sizes) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.sizes = sizes;
    }

    static getSampleProducts() {
        return [
          new Product(1, 'Sample Product 1', 'This is a sample product.', 10.99, ['XS', 'S', 'M', 'L', 'XL']),
          new Product(2, 'Sample Product 2', 'This is another sample product.', 15.99, ['M', 'L', 'XL']),
        ];
      }
  }
  
  module.exports = Product;