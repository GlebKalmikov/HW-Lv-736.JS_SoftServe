function findUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let a = i + 1; a < arr.length; a++) {
      if (arr[i] === arr[a]) {
        return false;
      }
    }
  }
  return true;
}
console.log(findUnique([1, 33, 33, 44, 2, 4, 3, 7, 56, 5]));
console.log(findUnique([2, 3, 5, 6, 65, 34, 33, 44, 58]));
