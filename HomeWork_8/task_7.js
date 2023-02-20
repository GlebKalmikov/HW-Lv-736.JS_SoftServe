function checkLogin(data) {
  const re = /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;
  const reqNumber = /[0-9\.]+/g;
  const resultNumber = data.match(reqNumber);
  const result = re.test(data);
  console.log(`${data} is ${result} - ${resultNumber}`);
}
checkLogin("ee1.1ret3");
checkLogin("ee1*1ret3");
