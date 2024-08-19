export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart)
{
    cart = [];
}

function saveToStorage()
{
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function addtocart(productId,cart)
{
    let matching;
    const quan = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);

    cart.forEach((item) =>{
        if(productId === item.id)
            matching = item;
    });

    if(matching)
        matching.quantity = quan;
    else
    {
        cart.push({
            id: productId,
            quantity: quan,
            deliveryOptionId: '1'
        });
    }
    saveToStorage();
}

export function removeFromCart (productId)
{
    let newCart = [];

    cart.forEach((item) => {
        if(item.id !== productId)
            newCart.push(item);
    });
    
    cart = newCart;
    saveToStorage();
}

export function updateDeliveyOption(id,deliveryOptionId)
{
    let matching;

    cart.forEach((item) =>{
        if(id === item.id)
            matching = item;
    });
    matching.deliveryOptionId = deliveryOptionId;
    saveToStorage();
}