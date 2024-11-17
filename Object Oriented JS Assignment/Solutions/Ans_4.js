// Base class Shape
class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate the abstract class Shape directly");
    }
  }

  // Abstract method for area (should be overridden by subclasses)
  area() {
    throw new Error("Method 'area()' must be implemented.");
  }

  // Abstract method for perimeter (should be overridden by subclasses)
  perimeter() {
    throw new Error("Method 'perimeter()' must be implemented.");
  }
}

// Subclass for Circle
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  // Override area method for Circle
  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  // Override perimeter method for Circle (Circumference)
  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

// Subclass for Rectangle
class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }

  // Override area method for Rectangle
  area() {
    return this.length * this.width;
  }

  // Override perimeter method for Rectangle
  perimeter() {
    return 2 * (this.length + this.width);
  }
}

// Subclass for Triangle
class Triangle extends Shape {
  constructor(a, b, c, height) {
    super();
    this.a = a; // Side a
    this.b = b; // Side b
    this.c = c; // Side c
    this.height = height; // Height of the triangle
  }

  // Override area method for Triangle (base * height / 2)
  area() {
    return (this.height * this.b) / 2; // Assuming base = b, height = height
  }

  // Override perimeter method for Triangle
  perimeter() {
    return this.a + this.b + this.c; // Sum of all three sides
  }
}

// Example 

// Create a Circle with radius 5
const circle = new Circle(5);
console.log(`Circle Area: ${circle.area()} square units`);
console.log(`Circle Perimeter: ${circle.perimeter()} units`);

// Create a Rectangle with length 10 and width 5
const rectangle = new Rectangle(10, 5);
console.log(`Rectangle Area: ${rectangle.area()} square units`);
console.log(`Rectangle Perimeter: ${rectangle.perimeter()} units`);

// Create a Triangle with sides 3, 4, 5 and height 4
const triangle = new Triangle(3, 4, 5, 4);
console.log(`Triangle Area: ${triangle.area()} square units`);
console.log(`Triangle Perimeter: ${triangle.perimeter()} units`);
