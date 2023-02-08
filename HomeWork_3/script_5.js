let arr = [1, 2, 5, 6, 76, 77, 66];
function findMin(arguments) {
  let min = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < min) {
      min = arguments[i];
    }
  }
  console.log(min);
}
findMin(arr);
