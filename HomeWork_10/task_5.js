let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];

function mapBuilder(keys, values) {
  const map = new Map();
  for (let i of keys) {
    map.set(i, values[i - 1]);
  }
  return map;
}

let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"
