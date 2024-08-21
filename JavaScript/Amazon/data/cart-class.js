class Cart {
    cartItems;
    localStoragekey;

    constructor(localStoragekey){
        this.localStoragekey = localStoragekey;
        this.loadFromStorage();
    }

    loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(this.localStoragekey));

        if(!this.cartItems)
        {
            this.cartItems = [];
        }
    }

    saveToStorage()
    {
        localStorage.setItem(this.localStoragekey,JSON.stringify(this.cartItems));
    }

    addtocart(productId)
    {
        let matching;
        const quan = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);

        this.cartItems.forEach((item) =>{
            if(productId === item.id)
                matching = item;
        });

        if(matching)
            matching.quantity = quan;
        else
        {
            this.cartItems.push({
                id: productId,
                quantity: quan,
                deliveryOptionId: '1'
            });
        }
        this.saveToStorage();
    }

    addtocart(productId)
    {
        let matching;
        const quan = 1;    //Number(document.querySelector(`.js-quantity-selector-${productId}`).value);

        this.cartItems.forEach((item) =>{
            if(productId === item.id)
                matching = item;
        });

        if(matching)
            matching.quantity = quan;
        else
        {
            this.cartItems.push({
                id: productId,
                quantity: quan,
                deliveryOptionId: '1'
            });
        }
        this.saveToStorage();
    }

    removeFromCart (productId)
    {
        let newCart = [];

        this.cartItems.forEach((item) => {
            if(item.id !== productId)
                newCart.push(item);
        });
        
        this.cartItems = newCart;
        this.saveToStorage();
    } 

    updateDeliveyOption(id,deliveryOptionId)
    {
        let matching;

        this.cartItems.forEach((item) => {
            if(id === item.id)
                matching = item;
        });
        matching.deliveryOptionId = deliveryOptionId;
        this.saveToStorage();
    }
}

const cart = new Cart('cart-oop');
const business = new Cart('business');

console.log(cart);
console.log(business);
console.log(business instanceof Cart);
