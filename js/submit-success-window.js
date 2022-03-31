(function () {
    let submitSuccessWindow = document.querySelector(".submit-success-alert");
    const submitButton = document.querySelector(".join-submit");
  
    submitButton.addEventListener("click", () => {
        submitSuccessWindow.innerHTML += 
        `<div class="submit-success-alert-window-background">
            <div class="submit-success-alert-window">
                <div class="cross-exit"></div>
                <img src="img/checkmark.jpg" alt="">
                <h5>Thank you!</h5>
                <h6>We will contact you shortly.</h6>
                <a class="orange-button-ok">Ok</a>
            </div>
        </div>`;
        document.querySelector(".cross-exit").addEventListener("click", () => submitSuccessWindow.innerHTML = "" );
        document.querySelector(".orange-button-ok").addEventListener("click", () => submitSuccessWindow.innerHTML = "" );
        }   
    );
  })();
