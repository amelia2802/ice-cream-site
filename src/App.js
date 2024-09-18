import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
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
  // State for cart and total price
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Add item to cart
  const addItemToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    const price = parseFloat(item.price);

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

  // Remove item from cart
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

  // Handle checkout
  const handleCheckout = () => {
    alert(`Proceeding to payment for $${totalPrice.toFixed(2)}`);
    setCart([]);
    setTotalPrice(0);
  };

  return (
    <Router>
      <div className="App">
        <Header />

        {/* Define Routes */}
        <Routes>
          {/* Main Route for Home Page */}
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

          {/* Route for Orders Page */}
          <Route
            path="/orders"
            element={
              <Orders
                cart={cart}
                totalPrice={totalPrice}
                handleCheckout={handleCheckout}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
