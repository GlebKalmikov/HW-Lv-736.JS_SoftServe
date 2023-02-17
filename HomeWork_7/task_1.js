let newWindow = window.open("", "", "width = 300, height = 300");
setTimeout(function () {
  newWindow.resizeTo(500, 500);
}, 2000);
setTimeout(function () {
  newWindow.moveTo(200, 200);
}, 4000);
setTimeout(function () {
  newWindow.color();
}, 6000);
