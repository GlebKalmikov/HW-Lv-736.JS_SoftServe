class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(b, h) {
    super();
    this.base = b;
    this.height = h;
  }

  getArea() {
    return (this.base * this.height) / 2;
  }
}

class Square extends GeometricFigure {
  constructor(a) {
    super();
    this.side = a;
  }
  getArea() {
    return this.side ** 2;
  }
}

class Circle extends GeometricFigure {
  constructor(r) {
    super();
    this.radius = r;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

function handleFigures(figures) {
  return figures.reduce(function (sum, figure) {
    if (figure instanceof GeometricFigure) {
      console.log(
        `Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`
      );
      return sum + figure.getArea();
    }
    throw Error("Bad argument figure.");
  }, 0);
}
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));
//
