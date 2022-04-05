(function() {

    const prods = [
      {
          id:"5",
          name:"Pinot Noir",
          description:"It is one of the lightest red wines. Pinot Noir is easy to drink, it won't punch you in the face like some reds can and is perfect for romantic evenings and meetings with friends. Our Pinot Noir has a \"light body\" and feels silky to the tongue. You might taste bright berries like raspberry and cranberry.",
          type:"red",
          link:"soave.html",
          price:"12.00",
          image:"img/pinot-noir.jpg",
          class:"one"
      },
      {
          id:"6",
          name:"Riesling",
          description:"Dazzling silver-gold in color, with intense mineral aromas of shale, gravel, and limestone, combined with notes of white flower, green apple, peach, and lemon oil. You can smell the flavors of fresh apricot, lime, and grapefruit pith.",
          type:"white",
          link:"soave.html",
          price:"16.00",
          image:"img/riesling-white.jpg",
          class:"two"
      },
      {
          id:"7",
          name:"Zifandel",
          description:"This wine is produced from more ripened berries than usual. Core flavors are rich, with jammy blackberries and mocha. You can pair this wine with braised ribs, chicken enchiladas, or dark chocolate.",
          type:"red",
          link:"soave.html",
          price:"14.00",
          image:"img/zifandel.jpg",
          class:"three"
      },
      {
          id:"8",
          name:"Soave",
          description:"Our Californian tribute to Italian wine varieties.<br><br>Light straw color. Delicate and gentle aroma of sweet field flowers: camomile, elder, and iris. Minced palate with almond aftertaste. Pairs with steamed fish, fresh cheese, and mussels.",
          type:"white",
          link:"soave.html",
          price:"12.00",
          image:"img/soave-white.jpg",
          class:"four"
      }
  ];
  
    function productInfoClick(ev) {
      const productId = ev.target.dataset.id;
      const product = prods.filter( product => product.id === productId)[0];
      localStorage.product = JSON.stringify(product);
    }
  
    function renderProds(prods) {
      const prodsContainer = document.querySelector('.craft-wines__shop-wine-cards');//'.products-container-of-bla-bla'
      for (const product of prods) {
        prodsContainer.innerHTML += `
          <div class="craft-wines__wine-card ${product.class}">
              <a href="soave.html" class="info-link" data-id=${product.id}>
                  <img src="${product.image}" alt="Bottle of ${product.name}" class="item-photo" data-id=${product.id}>
              </a>
              <a href="soave.html" class="craft-wines__wine-name info-link" data-id=${product.id}>${product.name}</a>
              <p class="craft-wines__price"><span class="craft-wines__cost">${product.price}</span> <span class="craft-wines__currency">USD</span></p> 
              <a class="craft-wines__button-orange add-to-cart" data-id="${product.id}">Add to cart</a>
          </div>`;
          
      }
      document.querySelectorAll('.info-link')
       .forEach( link => link.addEventListener('click', productInfoClick) );
    }
    renderProds(prods);
  })();