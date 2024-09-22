import React from "react";

export default function Cart({ cart, totalPrice,addItemToCart,removeItemFromCart }) {

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
                            <img src={require(`../img/${item.img}`)} alt={item.name} />
                        </div>
                        <p>$ {parseFloat(item.orderCount * item.price).toFixed(2)}</p>
                        <div>
                            <button className="cart-btn cart-add" onClick={() => addItemToCart(item)}>+</button>
                            <span>{cart.find(cartItem => cartItem.id === item.id)?.orderCount || 0}</span>
                            <button className="cart-btn cart-remove" onClick={() => removeItemFromCart(item)}>-</button>
                        </div>
                    </div>
                ))}
                <h3>Order Summary</h3>
                <div className="total-element">
                    <p>Total Price: </p>
                    <p>$ {totalPrice.toFixed(2)}</p>
                </div>
            </>
        );
    };

    return (
        <div id="cart" className="order-list">
            <h2 className="cart-header">Your Orders</h2>
            {renderCartItems()}
        </div>
    );
}
