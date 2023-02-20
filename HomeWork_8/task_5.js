function checkBankCard(str) {
  const regExp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
  const result = regExp.test(str);
  if (result) {
    console.log("Validation successful");
  } else {
    console.log("Please, try again. Incorrect data input!");
  }
}

checkBankCard("2345-3456-4567-6789");
checkBankCard("2345f-3456-4567-6789");
