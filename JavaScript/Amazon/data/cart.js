export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart)
{
    cart = [
        {
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2
        },
    
        {
            id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 1
        }
    ];
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
            quantity: quan
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



