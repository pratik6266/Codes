let producthtml = '';
products.forEach((product) => {
    producthtml  +=  ` 
        <div class="product-container">
        <div class="product-image-container">
            <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
            ${product.name}
        </div>

        <div class="product-rating-container">
            <img class="product-rating-stars"
            src="images/ratings/rating-${(product.rating.stars) * 10}.png">
            <div class="product-rating-count link-primary">
            ${product.rating.count}
            </div>
        </div>

        <div class="product-price">
            ${'$'+(product.priceCents/100).toFixed(2)}
        </div>

        <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart-${product.id} added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
        </div>

        <button class="add-to-cart-button button-primary js-addtocart"
        data-product-id="${product.id}">
            Add to Cart
        </button>
        </div>
    `;
});

document.querySelector('.js-products-grid').innerHTML = producthtml;

document.querySelectorAll('.js-addtocart').forEach((button) => {
    button.addEventListener('click',() =>
        {
        const productId = button.dataset.productId;

        let a = document.querySelector(`.added-to-cart-${productId}`)
        //a.style.opacity = 1;
        a.classList.add('added');

        setTimeout(() =>{
            //document.querySelector(`.added-to-cart-${productId}`).style.opacity = 0;
            a.classList.remove(`added`);
            console.log(a);
        },2000);
        
        console.log(productId)
        let matching;

        const quan = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);

        console.log(quan);

        cart.forEach((item) =>{
            if(productId === item.productId)
                matching = item;
        });

        if(matching)
            matching.quantity = quan;
        else
        {
            cart.push({
                productId: productId,
                quantity: quan
            });
        }

        let cartQuantity = 0;
        cart.forEach((item) => {
            cartQuantity += Number(item.quantity);
        })
        document.querySelector('.cart-quantity').innerHTML = cartQuantity;
        console.log(cartQuantity);
        console.log(cart);
    });
});