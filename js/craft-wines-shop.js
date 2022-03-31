(async function () {
    const wineCards = document.querySelector('.craft-wines__shop-wine-cards');

    let rate = 1; //USD
    let products;

    function renderProductCards() {
        wineCards.innerHTML = '';
        for (const product of products) {
            wineCards.innerHTML += 
            `<div class="craft-wines__wine-card ${product.class}">
                <a href="${product.link}" class="link-to-item-page">
                    <img src="${product.image}" alt="Bottle of ${product.name}" class="item-photo">
                </a>
                <a href="${product.link}" class="craft-wines__wine-name">${product.name}</a>
                <p class="craft-wines__price"><span class="craft-wines__cost">${(product.price * rate).toFixed(2)}</span> <span class="craft-wines__currency">USD</span></p>
                <a class="craft-wines__button-orange add-to-cart">Add to cart</a>
            </div>`;
        }
    }

    const response = await fetch('productscraftwine.json');
    products = await response.json();
    renderProductCards();
})();
