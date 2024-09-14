import React, { useState } from "react";
export default function MenuCard(props) {
    const filledStar = require("../img/star-filled.png");  // Path to the filled star image
    const blankStar = require("../img/star-blank.png");

    // Set up state for the items, cart, and total price
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    // Function to add item to cart
    const addItemToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);

        // Convert item price to a number
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

        // Calculate new total price
        const newTotalPrice = updatedCart.reduce((acc, cartItem) => acc + (cartItem.orderCount * parseFloat(cartItem.price)), 0);
        setCart(updatedCart);
        setTotalPrice(parseFloat(newTotalPrice.toFixed(2)));
    };

    // Function to remove item from cart
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

            // Calculate new total price
            const newTotalPrice = updatedCart.reduce((acc, cartItem) => acc + (cartItem.orderCount * parseFloat(cartItem.price)), 0);
            setCart(updatedCart);
            setTotalPrice(parseFloat(newTotalPrice.toFixed(2)));
        }
    };

    // Function to render cart items
    const renderCartItems = () => {
        if (cart.length === 0) {
            return <p>Your cart is empty.</p>;
        }

        return (
            <>
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <div className="item-details">
                        <p>{item.name}</p>
                        <img src={require(`../img/${item.img}`)}  alt={item.name} />
                        </div>
                        
                        <p>$ {parseFloat(item.orderCount * item.price).toFixed(2)}</p>
                    </div>
                ))}
                <hr />
                <div className="total-element">
                    <p>Total Price: </p>
                    <p>$ {totalPrice.toFixed(2)}</p>
                </div>
                <button className="confirm-order" onClick={handleCheckout}>
                    Proceed to Pay
                </button>
            </>
        );
    };

    // Function to handle checkout (hide cart, show payment, reset cart)
    const handleCheckout = () => {
        alert(`Proceeding to payment for $${totalPrice.toFixed(2)}`);
        // Reset the cart after payment (simulate payment completion)
        setCart([]);
        setTotalPrice(0);
    };

    return (
        <div className="menu">
            {/* Loop through the items and display them */}
            {props.items.map((item) => {
                // Convert item price to a number
                const price = parseFloat(item.price);
                if (isNaN(price)) {
                    console.error(`Invalid price for item ${item.name}: ${item.price}`);
                    return null;
                }

                return (
                    <div key={item.id} className="product-slide">
                        <section className="product">
                            <img className="product-img" src={require(`../img/${item.img}`)} alt={item.name} />
                            <h3 className="product-name">{item.name}</h3>
                            <div className='review'>
                                <div className='ratings'>
                                    {[...Array(5)].map((_, i) => (
                                        <img 
                                            key={i} 
                                            src={i < item.rate ? filledStar : blankStar} 
                                            alt='star' 
                                        />
                                    ))}
                                </div>
                                <p className='total-orders'>{item.order}</p>
                            </div>
                            <p className="product-desc">{item.desc}</p>
                            <div className="price-details">
                                <p className="product-price">${price.toFixed(2)}</p>
                                <div className="cart-buttons">
                                    <button className='cart-btn cart-add' onClick={() => addItemToCart(item)}>+</button>
                                    <span>{cart.find(cartItem => cartItem.id === item.id)?.orderCount || 0}</span>
                                    <button className='cart-btn cart-remove' onClick={() => removeItemFromCart(item)}>-</button>
                                </div>
                            </div>
                        </section>
                    </div>
                );
            })}

                        <div id="cart" className="order-list">
                            <h2 className="cart-header">Your Orders</h2>
                            {renderCartItems()}
                        </div>
                </div>
    );
}
