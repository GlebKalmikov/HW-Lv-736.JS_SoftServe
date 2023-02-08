let a = parseInt(prompt("enter a number"));
let b = parseInt(prompt("how many times ?"));

if (isNaN(a)) {
  alert("first number is not a number");
} else if (isNaN(b)) {
  alert("second number is not a number");
}

function raiseToDegree(a, b) {
  let c = a;
  for (i = 1; i < b; i++) {
    c = c * a;
  }
  console.log(c);
}

raiseToDegree(a, b);
