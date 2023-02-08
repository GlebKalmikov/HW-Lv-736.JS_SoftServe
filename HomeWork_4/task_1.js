function calcRectangleArea(width, heigh) {
  if (isNaN(width) || isNaN(heigh)) {
    throw "Parameter is not a number!";
  }
  return width * heigh;
}

try {
  console.log(calcRectangleArea(4, "d"));
} catch (exception) {
  console.log(exception);
}
