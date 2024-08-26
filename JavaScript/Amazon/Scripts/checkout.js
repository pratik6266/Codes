import {render} from './checkout/orderSummary.js';
import {paymentRender} from './checkout/paymentSummay.js';
import {loadProducts} from '../data/products.js';
//import '../data/cart-class.js';
// import '../data/products.js'

loadProducts(() => {
    render();
    paymentRender();
});
