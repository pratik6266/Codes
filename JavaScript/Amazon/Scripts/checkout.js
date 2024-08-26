import {render} from './checkout/orderSummary.js';
import {paymentRender} from './checkout/paymentSummay.js';
import {loadProductsFetch} from '../data/products.js';
//import '../data/cart-class.js';
// import '../data/products.js'

Promise.all([
    loadProductsFetch()
]).then(() => {
    render();
    paymentRender();
})
