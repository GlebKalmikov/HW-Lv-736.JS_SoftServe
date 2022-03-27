(function () {
    const addButton = document.querySelector(".craft-wines__button-orange");
    let counter = document.querySelector(".cart__counter");

    let count = 0;
    addButton.onclick = function() {
    counter.innerHTML = "";
    count += 1;
    counter.innerHTML = count;
    };
    // натискається тільки перша кнопка, яка має відповідний клас
})();