class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  // ...

  static calculate(figure) {
    const PI = 3.14;
    let area;
    if (figure instanceof Square) {
      area = figure.side * figure.side;
      return area;
    } else if (figure instanceof Rectangle) {
      return figure.width * figure.height;
    } else {
      area = figure.radius * 2 * PI;
      return area.toFixed(2);
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
