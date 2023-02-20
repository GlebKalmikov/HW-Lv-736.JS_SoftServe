function checkEmail(str) {
  const mailPattern = /^[a-z A-Z 0-9]+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
  if (mailPattern.test(str)) {
    console.log("Email is correct!");
  } else {
    console.log("Email is not correct!");
  }
}
checkEmail("my_mail@gmail.com");
checkEmail("#my_mail@gmail.com");
checkEmail("my_ma--il@gmail.com");
