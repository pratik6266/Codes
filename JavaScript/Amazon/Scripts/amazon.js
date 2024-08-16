import {cart, addtocart} from  '../data/cart.js'
import {products} from '../data/products.js'
import {formatMoney} from './utils/money.js'

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
            ${'$'+formatMoney(product.priceCents)}
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

function updateCartQuantity (productId)
{
    let a = document.querySelector(`.added-to-cart-${productId}`)
    a.style.opacity = 1;

    setTimeout(() =>{
        document.querySelector(`.added-to-cart-${productId}`).style.opacity = 0;
    },2000);

    
    let cartQuantity = 0;
    cart.forEach((item) => {
        cartQuantity += Number(item.quantity);
    })
    document.querySelector('.cart-quantity').innerHTML = cartQuantity;
}

document.querySelectorAll('.js-addtocart').forEach((button) => {
    button.addEventListener('click',() =>
        {
        const productId = button.dataset.productId;

        addtocart(productId,cart);
        updateCartQuantity(productId);
        //console.log(cartQuantity);
        //console.log(cart);
    });
});