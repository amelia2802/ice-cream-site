import React from "react";
import Cart from "./Cart";
import PaymentForm from "../composables/PaymentForm";

export default function Orders({ cart, totalPrice, addItemToCart, removeItemFromCart }) {

  return (
    <section id="order">
      <Cart
        cart={cart}
        totalPrice={totalPrice}
        addItemToCart={addItemToCart}
        removeItemFromCart={removeItemFromCart}
      />
      {cart.length>0 ? <PaymentForm totalPrice={totalPrice} /> : ""}
    </section>
  );
}
