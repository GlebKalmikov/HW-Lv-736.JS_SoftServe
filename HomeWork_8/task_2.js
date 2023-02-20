function checkEmail(data) {
  const regExp = /\S+@\S+\.\S+/;
  console.log(regExp.test(data));
}
checkEmail("Qmail2@gmail.com");
