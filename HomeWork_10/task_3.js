function mul(...rest) {
  let result = 1;
  let isNumber;
  for (let i of rest) {
    if (typeof i == "number") {
      result *= i;
      isNumber = true;
    }
  }
  return isNumber ? result : 0;
}
console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));
