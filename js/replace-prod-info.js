(function() {
   
    function showInfo() {
      const product = JSON.parse(localStorage.product || "{}");
      if (!product) return;
      document.querySelector('.product-page__gallery-carousel')
        .innerHTML = `<img src="${product.image}" alt="">`;
      document.querySelector('.product-page__gallery-miniature')
        .innerHTML = `<img src="${product.image}" alt="">`;
      document.querySelector(".product-page__product-name")
        .innerText = product.name;
      document.querySelector('.product-number')
        .innerText = `Product code ${product.id}`;
      document.querySelector('.product-page__price')
        .innerHTML = `${product.price} <span class="product-page__currency">USD</span>`;
      document.querySelector('.add-to-cart-button')
        .setAttribute("data-id", `${product.id}`);
      document.querySelector('.add-to-cart-button')
        .setAttribute("id", `${product.id}`);
      document.querySelector(".product-page__description-paragraph")
        .innerText = product.description;
    }
  
    showInfo();
  
  })();