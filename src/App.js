import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import MenuCard from "./components/MenuCard";
import About from "./components/About";
import Testimonials from './components/Testimonials';
import Footer from "./components/Footer";
import Orders from "./components/Orders";
import data from "./data";
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    const price = parseFloat(item.price);

    if (cart.length !== 0) {
      document.getElementById("notify").style.visibility = "visible";
    }

    if (isNaN(price)) {
      console.error(`Invalid price for item ${item.name}: ${item.price}`);
      return;
    }

    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, orderCount: cartItem.orderCount + 1 }
          : cartItem
      );
    } else {
      updatedCart = [...cart, { ...item, orderCount: 1 }];
    }

    const newTotalPrice = updatedCart.reduce((acc, cartItem) => acc + (cartItem.orderCount * parseFloat(cartItem.price)), 0);
    setCart(updatedCart);
    setTotalPrice(parseFloat(newTotalPrice.toFixed(2)));
  };

  const removeItemFromCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      let updatedCart;
      if (existingItem.orderCount === 1) {
        updatedCart = cart.filter(cartItem => cartItem.id !== item.id);
      } else {
        updatedCart = cart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, orderCount: cartItem.orderCount - 1 }
            : cartItem
        );
      }

      const newTotalPrice = updatedCart.reduce((acc, cartItem) => acc + (cartItem.orderCount * parseFloat(cartItem.price)), 0);
      setCart(updatedCart);
      setTotalPrice(parseFloat(newTotalPrice.toFixed(2)));
    }
  };

  const handleCheckout = () => {
    alert(`Proceeding to payment for $${totalPrice.toFixed(2)}`);
    setCart([]);
    setTotalPrice(0);
  };

  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <div className="divider"></div>
                <Offers />
                <h2 id="product" className="menu-header">Popular Choices of the week</h2>
                <MenuCard
                  items={data}
                  addItemToCart={addItemToCart}
                  removeItemFromCart={removeItemFromCart}
                  cart={cart}
                  totalPrice={totalPrice}
                />
                <About />
                <Testimonials />
                <div className="divider-2"></div>
                <Footer />
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <Orders
                cart={cart}
                totalPrice={totalPrice}
                handleCheckout={handleCheckout}
                addItemToCart={addItemToCart} // Pass the addItemToCart function
                removeItemFromCart={removeItemFromCart} // Pass the removeItemFromCart function
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
