import React from 'react';

export default function Menu(props) {   
    return (
        <div className="menu">
                {props.items.map((item) => (
                    <div key={item.id} className="product-slide">
                        <section id='product' className="product">
                            <img className="product-img" src={require(`../img/${item.img}`)} alt={item.name} />
                            <h3 className="product-name">{item.name}</h3>
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
