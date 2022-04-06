(async function () {
    const wineCards = document.querySelector('.craft-wines__shop-wine-cards');

    let rate = 1; //USD
    let products;

    //фільтр з масива по айді і додавання в локал сторідж
    function productInfoClick(ev) {
        const productId = ev.target.dataset.id;
        const product = products.filter( product => product.id === productId)[0];
        localStorage.product = JSON.stringify(product);
    }


    function renderProductCards() {
        for (const product of products) {
            // wineCards.innerHTML ;
            const addButton = document.querySelectorAll(".craft-wines__button-orange");
            let counter = document.querySelector(".cart__counter");
            
            //повтор из карт-виндоу
            let cart = {
                "5": 1,
                "6": 1,
                "7": 1,
                "8": 1
            }
            // добавление в корзину
            document.querySelectorAll('.add-to-cart')
            .forEach( button => button.addEventListener('click', addToCard) );
            function addToCard(event) {
                //добавление товара в корзину по нажатию add-to-cart
                let whichProduct = event.target.dataset.id;
                let quantityOfThisProduct = cart[whichProduct];
                console.log(whichProduct, quantityOfThisProduct);

                // const cartDiv = `<div class="cartDiv">${whichProduct} - ${quantityOfThisProduct}штук</div>`;
                const cartDiv = document.createElement('div');
                cartDiv.innerHTML = 
                    `<div class="cart-window__products">
                        <div class="cart-window__product-details">
                            <img src="${product.image}" alt="">
                            <div class="details-column">
                                <h3 class="name-and-id">${product.name} (9180${product.id})</h3>
                                <h4 class="item-sum">${(product.price * rate).toFixed(2)} USD</h4>
                                <div class="cart-window__quantity-counter">
                                    <div class="cart-window__quantitifier">${quantityOfThisProduct}</div>
                                    <div class="cart-window__quantity-counter__arrows">
                                        <img src="img/arrow-up.png" data-id="${product.id}" class="cart-window__counter-arrow-up plus"></img>
                                        <img src="img/arrow-down.png" data-id="${product.id}" class="cart-window__counter-arrow-down minus"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="trash-can">
                            <img src="img/trash-can.png" alt="">
                        </div>
                    </div>`;

                    // cartDiv.onclick = (event) => {
                    //     if (event.target.classList.contains('plus')) {
                    //     quantityOfThisProduct ++;
                    //     }
                    //     if (event.target.classList.contains('minus')) {
                    //         if (quantityOfThisProduct === 1) cartDiv.innerHTML = '';
                    //         quantityOfThisProduct --;
                    //     }
                    // }
                                
                    const productInCart = document.querySelector('.prod-header');
                    productInCart.insertAdjacentElement("afterend", cartDiv);
                    
                    //сума рахується
                    const total = document.querySelector('.total');
                    let totalSum = 0;
                    totalSum += product.price;
                    total.innerHTML = `Total: ${totalSum} USD`
                    
                    // удалить товар при нажатии на иконку мусорки
                    const trashCanIcon = document.querySelector('.trash-can');
                    trashCanIcon.onclick = () => {
                        cartDiv.innerHTML = "";
                        totalSum -= product.price;
                        total.innerHTML = `Total: ${totalSum} USD`
                    }
                };
                            
                //индикатор на иконке корзины
                addButton.forEach((button) => {
                let count = 0;
                button.addEventListener('click', () => {
                    counter.innerHTML = "";
                    count += 1;
                    counter.innerHTML = count;
                    console.log();
                });
            });

        }
        document.querySelectorAll('.link-to-item-page')
            .forEach( link => link.addEventListener('click', productInfoClick) );
    }

    document.onclick = (event) => {
        if (event.target.classList.contains('plus')) {
        plusFunction(event.target.dataset.id);
        }
        if (event.target.classList.contains('minus')) {
        minusFunction(event.target.dataset.id);
        }
    }

    // плюсуем количество по айди
    const plusFunction = (id) => {
        cart[id]++;
        renderCart();
    }
    
    // отнимаем количество по айди
    const minusFunction = (id) => {
        if (cart[id] - 1 === 0) {
        deleteFunction(id);
        return true;
        }
        cart[id]--;
        renderCart();
    }

    // удалить товар
    const deleteFunction = (id) => {
        delete cart;
        renderCart();
    }

    const response = await fetch('productscraftwine.json');
    products = await response.json();
    renderProductCards();
})();
