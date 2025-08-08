interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

interface Rectangle {
  kind: "rectangle";
  sideLength: number;
}

type Shape = Circle | Square | Rectangle;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
    case "rectangle":
      return shape.sideLength ** 2;
    default:
      const otherValue: never = shape;
      return otherValue;
  }
}
