(function () {
    const addButton = document.querySelectorAll(".craft-wines__button-orange");
    let counter = document.querySelector(".cart__counter");

    let count = 0;
    addButton.onclick = function() {
    counter.innerHTML = "";
    count += 1;
    counter.innerHTML = count;
    };
})();