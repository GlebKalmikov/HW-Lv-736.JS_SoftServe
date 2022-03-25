(ageChecker() {
    const confirmWindow = document.querySelector(.age-checker);
    const overageButton = document.querySelector(.overage-button);
    const underageButton = document.querySelector(.underage-button);

    overageButton.addEventListener('click', confirmWindow.innerHTML = '');
    
    function goToNotAllowedPage(){
    window.location="not-allowed.html";
}

}) ();
