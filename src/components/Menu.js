import React from 'react';

export default function Menu(props) {
    const filledStar = require("../img/star-filled.png");  // Path to the filled star image
    const blankStar = require("../img/star-blank.png");
       
    return (
        <div className="menu">
                {props.items.map((item) => (
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
                                <p className="product-price">${item.price}</p>
                                <p className='cart'><img src={require('../img/arrow.png')} alt='arrow'/></p>
                            </div>
                        </section>
                    </div>
                ))}
        </div>
    );
}
