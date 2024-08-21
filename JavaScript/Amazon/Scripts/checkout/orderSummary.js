import {cart, removeFromCart, updateDeliveyOption} from '../../data/cart.js';
import {products} from '../../data/products.js';
import {formatMoney} from '../utils/money.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {deliveryOptions} from '../../data/deliveryOptions.js';
import { paymentRender } from './paymentSummay.js';

export function render ()
{
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
    
        const deliveryOptionId = item.deliveryOptionId;
    
        let deliveryOption;
    
        deliveryOptions.forEach((option) => {
            if(option.id === deliveryOptionId)
            {
                deliveryOption = option;
            }
        })
    
        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.Date,'days');
        const dateString = deliveryDate.format('dddd, MMMM D');
    
        checkouthtml += `<div class="cart-item-container jsToDelete-${matching.id}">
        <div class="delivery-date">
            Delivery date: ${dateString}
        </div>
    
        <div class="cart-item-details-grid">
            <img class="product-image"
            src="${matching.image}">
    
            <div class="cart-item-details">
            <div class="product-name">
                ${matching.name}
            </div>
            <div class="product-price">
                ${matching.getprice()}
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
                ${deliveryOptionhtml(matching,item)}
            </div>
        </div>
        </div>`;
    });
    
    function  deliveryOptionhtml(matching,item)
    {
        let html = '';
        deliveryOptions.forEach((value) =>
        {
            const today = dayjs();
            const deliveryDate = today.add(value.Date,'days');
            const dateString = deliveryDate.format('dddd, MMMM D');
    
            const priceString = value.Cents === 0
                ? 'FREE'
                : `$${formatMoney(value.Cents)} -`
    
            const ischecked = value.id === item.deliveryOptionId;
    
            html +=
                `<div class="delivery-option js-delivery-option"
                 data-product-id = "${matching.id}"
                 data-delivery-option-id = "${value.id}">
                    <input type="radio"
                    ${ischecked ? 'checked' : ''}
                    class="delivery-option-input"
                    name="delivery-option-${matching.id}">
                    <div>
                    <div class="delivery-option-date">
                        ${dateString}
                    </div>
                    <div class="delivery-option-price">
                        ${priceString} Shipping
                    </div>
                    </div>
                </div>`
            });
            return html;
    }
    
    document.querySelector('.order-summary').innerHTML = checkouthtml;
    
    document.querySelectorAll('.delete-quantity-link').forEach((link) =>
    {
        link.addEventListener('click',() =>
        {
            const productId = link.dataset.productId;
            removeFromCart(productId);
            const toDelete = document.querySelector(`.jsToDelete-${productId}`);
            toDelete.remove();
            updateCheckoutTop();
            paymentRender();
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
    
    function cal()
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
    })
    
    document.querySelectorAll('.js-delivery-option').forEach((element) => {
        element.addEventListener('click',() => {
            const id = element.dataset.productId;
            const deliveryOptionId = element.dataset.deliveryOptionId;
            updateDeliveyOption(id,deliveryOptionId);
            render();
            paymentRender();
        })
    })
}

