(function () {
    let submitSuccessWindow = document.querySelector(".submit-success-alert");
    const submitButton = document.querySelector(".join-submit");
  
    submitButton.addEventListener("click", () => submitSuccessWindow.innerHTML += 
            `<div class="submit-success-alert-window">
                <div class="cross-exit"></div>
                <img src="img/checkmark.jpg" alt="">
                <h5>Thank you!</h5>
                <h6>We will contact you shortly.</h6>
                <a class="orange-button-ok">Ok</a>
            </div>`
     );
    
    const crossButton = document.querySelector(".cross-exit");
    const okButton = document.querySelector(".orange-button-ok");
     
    crossButton.addEventListener("click", () => submitSuccessWindow.innerHTML = "" );
    okButton.addEventListener("click", () => submitSuccessWindow.innerHTML = "" );
  })();