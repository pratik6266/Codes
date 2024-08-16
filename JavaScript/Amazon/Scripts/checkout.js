import {cart, removeFromCart} from '../data/cart.js';
import {products} from '../data/products.js';
import {formatMoney} from './utils/money.js';

window.onload = function () {
    let cartQuantity = 0;
    cart.forEach((item) => {
        cartQuantity += Number(item.quantity);
    })
    document.querySelector('.js-top').innerHTML = `${cartQuantity} items`;
}

let checkouthtml = '';
cart.forEach((item) =>
{
    const productId = item.id;
    let matching;

    products.forEach((value) =>
    {
        if(value.id === productId)
            matching = value;
    });

    checkouthtml += `<div class="cart-item-container jsToDelete-${matching.id}">
    <div class="delivery-date">
        Delivery date: Tuesday, June 21
    </div>

    <div class="cart-item-details-grid">
        <img class="product-image"
        src="${matching.image}">

        <div class="cart-item-details">
        <div class="product-name">
            ${matching.name}
        </div>
        <div class="product-price">
            ${'$'+formatMoney(matching.priceCents)}
        </div>
        <div class="product-quantity">
            <span>
            Quantity: <span class="quantity-label">${item.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary js-update" data-product-id = ${matching.id}>
            Update
            <input class="quantity-input">
            <span class="save-quantity-link link-primary">Save</span>
            </span>
            <span class="delete-quantity-link link-primary js-delete" data-product-id = ${matching.id}>
            Delete
            </span>
        </div>
        </div>

        <div class="delivery-options">
        <div class="delivery-options-title">
            Choose a delivery option:
        </div>
        <div class="delivery-option">
            <input type="radio" checked
            class="delivery-option-input"
            name="delivery-option-${matching.id}">
            <div>
            <div class="delivery-option-date">
                Tuesday, June 21
            </div>
            <div class="delivery-option-price">
                FREE Shipping
            </div>
            </div>
        </div>
        <div class="delivery-option">
            <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matching.id}">
            <div>
            <div class="delivery-option-date">
                Wednesday, June 15
            </div>
            <div class="delivery-option-price">
                $4.99 - Shipping
            </div>
            </div>
        </div>
        <div class="delivery-option">
            <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matching.id}">
            <div>
            <div class="delivery-option-date">
                Monday, June 13
            </div>
            <div class="delivery-option-price">
                $9.99 - Shipping
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>`;
});

document.querySelector('.order-summary').innerHTML = checkouthtml;

document.querySelectorAll('.delete-quantity-link').forEach((link) =>
{
    link.addEventListener('click',() =>
    {
        const productId = link.dataset.productId;
        console.log(link.dataset);
        removeFromCart(productId);
        const toDelete = document.querySelector(`.jsToDelete-${productId}`);
        toDelete.remove();
        updateCheckoutTop();
    })
})

document.querySelectorAll('.update-quantity-link').forEach((link) =>
{
    link.addEventListener('click',() =>
    {
        const productId = link.dataset.productId;
        console.log(link.dataset);
    })
})



export function cal()
{
    let cartQuantity = 0;
    cart.forEach((item) => {
        cartQuantity += Number(item.quantity);
    })
    return cartQuantity;
}

function updateCheckoutTop ()
{
    let a = cal();
    document.querySelector('.js-top').innerHTML = `${a} items`;
}

document.querySelector('.update-quantity-link').addEventListener('click',() => {
    let element = document.getElementsByClassName('product-quantity');
    element.classList.add("isediting")
    console.log(element)
})