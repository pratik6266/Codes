import {render} from './checkout/orderSummary.js';
import {paymentRender} from './checkout/paymentSummay.js';
import {loadProductsFetch} from '../data/products.js';
//import '../data/cart-class.js';
// import '../data/products.js'


async function loadPage(){
    try{
        await loadProductsFetch();
    }
    catch(error)
    {
        console.log('Unexpected Error Occured');
    }
    render();
    paymentRender();
}

loadPage();