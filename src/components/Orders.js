import React from "react";
import Cart from "./Cart";

export default function Orders({ cart, totalPrice, handleCheckout }) {
    return (
        <section id="order">
            <Cart cart={cart} totalPrice={totalPrice} handleCheckout={handleCheckout} />
            <div>
                <h1>Checkout</h1>
                <form className="checkout-form">
                    <label for="fullName">Cardholder's Name</label>
                    <input 
                        type="text"
                        name="fullName"
                        required
                    />
                    <label for="cardNumber">Card Number</label>
                    <input 
                        type="number"
                        name="cardNumber"
                        required
                    />
                    <div>
                        
                    <label for="expdate">Expiration Date</label>
                    <input 
                        type="month"
                        name="expdate"
                        required
                    />
                    <label for="cvc">CVC</label>
                    <input 
                        type="number"
                        name="cvc"
                        min="111"
                        max="999"
                        required
                    />
                    </div>
                    <button className="confirm-order" onClick={handleCheckout}>
                        Proceed to Pay
                    </button>
                </form>
            </div>
        </section>
    );
}
