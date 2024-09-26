import React from "react";
import Cart from "./Cart";

export default function Orders({ cart, totalPrice, handleCheckout, addItemToCart, removeItemFromCart }) {
  return (
    <section id="order">
      <Cart
        cart={cart}
        totalPrice={totalPrice}
        addItemToCart={addItemToCart}
        removeItemFromCart={removeItemFromCart}
      />
      <div>
        <h1>Checkout</h1>
        <form className="checkout-form" onSubmit={(e) => e.preventDefault() /* Prevent default form submission */}>
          <label htmlFor="fullName">Cardholder's Name</label>
          <input 
            type="text"
            name="fullName"
            required
          />
          <label htmlFor="cardNumber">Card Number</label>
          <input 
            type="number"
            name="cardNumber"
            required
          />
          <div>
            <label htmlFor="expdate">Expiration Date</label>
            <input 
              type="month"
              name="expdate"
              required
            />
            <label htmlFor="cvc">CVC</label>
            <input 
              type="number"
              name="cvc"
              min="111"
              max="999"
              required
            />
          </div>
          <button 
            className="confirm-order"
            onClick={(e) => {
              e.preventDefault(); // Prevent form submission
              handleCheckout(); // Proceed with checkout
            }}
          >
            Proceed to Pay ${totalPrice}
          </button>
        </form>
      </div>
    </section>
  );
}
