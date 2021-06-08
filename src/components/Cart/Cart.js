import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0)

    let shipping = 0;
    if(totalPrice > 35){
        shipping = 0;
    }
    else if(totalPrice > 15){
        shipping = 4.99;
    }
    else if(totalPrice > 0){
        shipping = 12.99;
    }
    
    const tax = (totalPrice/10).toFixed(2);
    const grandTotal = (totalPrice + shipping + Number(tax).toFixed(2));

    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Items ordered: {cart.length}</h4>
            <p>Product Price: ${totalPrice}</p>
            <p><small>Shipping Charge: ${shipping}</small></p>
            <p>Tax: ${tax}</p>
            <p>Total Price: ${grandTotal}</p>
        </div>
    );
};

export default Cart;