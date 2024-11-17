// Product Constructor Function
function Product(name, category, price, stock) {
  this.name = name;
  this.category = category;
  this.price = price;
  this.stock = stock;
}

// Inventory Constructor Function
function Inventory() {
  this.products = [];  // This will store the list of products
}

// Extend the Inventory prototype with methods to manage products
Inventory.prototype.addProduct = function(product) {
  if (product instanceof Product) {
    this.products.push(product);
    console.log(`Product '${product.name}' added to inventory.`);
  } else {
    console.log("Error: Only a valid Product object can be added.");
  }
};

Inventory.prototype.deleteProduct = function(productName) {
  const index = this.products.findIndex(product => product.name === productName);
  
  if (index !== -1) {
    const deletedProduct = this.products.splice(index, 1);
    console.log(`Product '${deletedProduct[0].name}' removed from inventory.`);
  } else {
    console.log(`Error: Product with name '${productName}' not found.`);
  }
};

Inventory.prototype.displayInventory = function() {
  if (this.products.length === 0) {
    console.log("Inventory is empty.");
  } else {
    console.log("Inventory:");
    this.products.forEach(product => {
      console.log(`- ${product.name}, Category: ${product.category}, Price: Rs.${product.price}, Stock: ${product.stock}`);
    });
  }
};

// Example Usage:

// Create new products
const product1 = new Product("Laptop", "Electronics", 999.99, 20);
const product2 = new Product("Phone", "Electronics", 799.99, 30);
const product3 = new Product("Coffee Maker", "Appliances", 49.99, 50);

// Create a new Inventory instance
const inventory = new Inventory();

// Add products to the inventory
inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.addProduct(product3);

// Display the inventory
inventory.displayInventory();

// Remove a product from the inventory
inventory.deleteProduct("Phone");

// Display the inventory after deletion
inventory.displayInventory();

// Try to delete a non-existing product
inventory.deleteProduct("Smartwatch");
