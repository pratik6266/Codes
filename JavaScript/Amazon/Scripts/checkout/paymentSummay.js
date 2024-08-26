import {cart} from '../../data/cart.js';
import {products} from '../../data/products.js';
import {deliveryOptions} from '../../data/deliveryOptions.js';
import {formatMoney} from '../utils/money.js';
import { addOrder } from '../../data/orders.js';


export function paymentRender ()
{
    let productpriceCents = 0;
    let shippingPrice = 0;
    let quantity = 0;
    cart.forEach((item) => {
        let matching;
        let match;
        quantity += item.quantity;
        
        products.forEach((prod) => {
            if(prod.id === item.id)
                matching = prod; 
        })

        const deliveryOptionId = item.deliveryOptionId;

        deliveryOptions.forEach((option) => {
            if(option.id === deliveryOptionId)
            {
                match = option;
            }

        })

        shippingPrice += match.Cents;
        productpriceCents += matching.priceCents * item.quantity;
    })
    const totalBeforeTax = shippingPrice + productpriceCents;
    const  tax = totalBeforeTax * 0.1;
    const totalCents = totalBeforeTax + tax;

    const paymentSummaryhtml = `
        <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${quantity}):</div>
            <div class="payment-summary-money">$${formatMoney(productpriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatMoney(shippingPrice)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatMoney(totalBeforeTax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatMoney(tax)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatMoney(totalCents)}</div>
          </div>

          <button class="place-order-button button-primary js-placeorder">
            Place your order
          </button>    
    `;

    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryhtml;

    document.querySelector('.js-placeorder').addEventListener('click', async() => {
      const response = await fetch('https://supersimplebackend.dev/orders', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          cart: cart
        })
      });

      const order = await response.json();
      addOrder(order);
      window.location.href = 'orders.html';
    });

}