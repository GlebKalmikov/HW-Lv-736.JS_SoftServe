(function () {
    const addButton = document.querySelector(".add-to-cart-button");
    let counterOnCart = document.querySelector(".cart__counter");
    const arrowIncrement = document.querySelector(".counter-arrow-up");
    const arrowDecrement = document.querySelector(".counter-arrow-down");
    let quantity= document.querySelector(".quantitifier");
    
    
    let count = 1;
    arrowIncrement.onclick = function() {
        quantity.innerHTML = "";
        count += 1;
        quantity.innerHTML = count;
    };
    
    arrowDecrement.onclick = function() {
        quantity.innerHTML = "";
        count === 1 ? quantity.innerHTML = count :
        count -= 1;
        quantity.innerHTML = count;
    };

    addButton.onclick = function() {
        counterOnCart.innerHTML = "";
        counterOnCart.innerHTML += count;
    };
    //не додає правильну кількість товарів по натисканню на кнопку

    const cartIcon = document.querySelector(".cart__icon-with-counter")
    let cartWindow = document.querySelector(".cart-window")


    cartIcon.onclick = function() {
        cartWindow.innerHTML +=
        `div
        `
        ;

    }




})();