let myObj = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

function showProps(obj) {
  console.log(Object.values(obj));
  console.log(Object.keys(obj));
}
console.log(showProps(myObj));
