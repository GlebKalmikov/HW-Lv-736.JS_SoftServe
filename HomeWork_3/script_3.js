let k = 5;
let arr = [];
function randArray(k) {
  for (let i = 1; i <= k; i++) {
    arr.push(Math.floor(Math.random() * 500));
  }
  console.log(arr);
}
randArray(k);
