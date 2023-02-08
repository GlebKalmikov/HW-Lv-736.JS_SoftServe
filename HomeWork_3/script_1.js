let arr = [2, 3, 4, 5];
let result = 1;
for (let i = 0; i < arr.length; i++) {
  result = result * arr[i];
}
console.log(result);

let arr2 = [2, 3, 4, 5];
let result = 1;
let i = 0;
while (i < arr2.length) {
  result = result * arr2[i];
  i++;
  console.log(result);
}
