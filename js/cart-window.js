(function () {
  const closeButton = document.querySelector('.close-btn');
  const cartWindow = document.querySelector('.cart-window');
  const cartIcon = document.querySelector('.cart__icon-with-counter');
  const trashCanIcon = document.querySelector('.trash-can');
  const productInCart = document.querySelector('.cart-window__products');
  
  //выдвигается при нажатии на иконку корзины
  cartIcon.onclick = () => {
    cartWindow.style.transform = "translateX(0)";
  }
  
  
  //окно корзины прячется принажатии на крестик
  closeButton.onclick = () => {
    cartWindow.style.transform = "translateX(-200%)";
  }
  // переменная корзины для консоли
  let cart = {
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0
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
  // удалить товар, но что-то не выходит
  const deleteFunction = (id) => {
    delete cart;
    renderCart();
  }

  const total = document.querySelector('.total');
  let totalSum = 0;
  total.innerHTML = `Total: ${totalSum} USD`
  // функция нарисовать корзину - дописать функцию
  const renderCart = () => {
    productInCart.innerHTML = "";
      
    console.log(cart);
  }
  // вызов отрисовки корзины
  // renderCart();

  
  // // удалить товар при нажатии на иконку мусорки
  // trashCanIcon.onclick = () => {
  //   productInCart.innerHTML = "";
  // }

  // добавить товар в корзину, если есть класс add-to-cart
  // document.onclick = (event) => {
  //   if (event.target.classList.contains('add-to-cart')) {
  //     // plusFunction(event.target.dataset.id);
  //     console.log(products[(event.target.dataset.id)-1]);
  //   }
  // }


  async () => {
    // достать товары из .json
    let products
    const response = await fetch('productscraftwine.json');
    products = await response.json();


  };
  

  


  console.log();


})();