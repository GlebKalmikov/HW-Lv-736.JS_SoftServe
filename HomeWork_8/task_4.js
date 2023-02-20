const reg = /(\w+)\s(\w+)/;
const strin = "Java Script";
const strin2 = strin.replace(reg, "$2, $1");
console.log(strin2);
