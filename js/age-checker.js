(function () {
  const confirmWindow = document.querySelector(".age-checker-holder");
  const overageButton = document.querySelector(".overage-button");
  const underageButton = document.querySelector(".underage-button");

  overageButton.addEventListener("click", () => confirmWindow.innerHTML = "" );
  underageButton.addEventListener("click", goToNotAllowedPage );

  function goToNotAllowedPage() {
    window.location = "not-allowed.html";
  }
  
})();
