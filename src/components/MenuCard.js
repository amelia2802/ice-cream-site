import React from "react";

export default function MenuCard({ items, cart, addItemToCart, removeItemFromCart }) {
    const filledStar = require("../img/star-filled.png");
    const blankStar = require("../img/star-blank.png");

    return (
        <div id="product" className="menu">
            {items.map((item) => {
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
                            <div className="review">
                                <div className="ratings">
                                    {[...Array(5)].map((_, i) => (
                                        <img
                                            key={i}
                                            src={i < item.rate ? filledStar : blankStar}
                                            alt="star"
                                        />
                                    ))}
                                </div>
                                <p className="total-orders">{item.order}</p>
                            </div>
                            <p className="product-desc">{item.desc}</p>
                            <div className="price-details">
                                <p className="product-price">${price.toFixed(2)}</p>
                                <div className="cart-buttons">
                                    <button className="cart-btn cart-add" onClick={() => addItemToCart(item)}>+</button>
                                    <span>{cart.find(cartItem => cartItem.id === item.id)?.orderCount || 0}</span>
                                    <button className="cart-btn cart-remove" onClick={() => removeItemFromCart(item)}>-</button>
                                </div>
                            </div>
                        </section>
                    </div>
                );
            })}
        </div>
    );
}
