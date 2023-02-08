let x = parseInt(prompt("снорона трикутника"));
let y = parseInt(prompt("снорона трикутника"));
let z = parseInt(prompt("снорона трикутника"));
if (x > 0 && y > 0 && z > 0) {
  let result = (x + y + z) / 2;
  let areaValue = Math.sqrt(
    result * (result - x) * (result - y) * (result - z)
  );
  console.log("Площа трикутника становить :" + areaValue.toFixed(3));
} else {
  alert("Incorrect deta!");
}
