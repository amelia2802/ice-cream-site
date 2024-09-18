import React from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom"; // Import Link for routing

export default function Header() {
    const cartImg = require("../img/cart.png");

    const [toggled, setToggled] = React.useState(false);

    return (
        <header>
            <CiMenuKebab className="hamburger" onClick={() => setToggled(!toggled)} />
            {
                window.innerWidth < 600 ?
                    <Sidebar
                        onBackdropClick={() => setToggled(false)}
                        toggled={toggled}
                        breakPoint="always"
                        image="https://i.pinimg.com/564x/ee/17/91/ee1791186d610736dd3ce5e24714196a.jpg"
                        rtl
                    >
                        <nav className="navbar">
                            <Menu>
                                <MenuItem className="nav-item">
                                    <Link to="/" onClick={() => setToggled(false)}>Home</Link>
                                </MenuItem>
                                <MenuItem className="nav-item">
                                    <a href="#product" onClick={() => setToggled(false)}>Menu</a> {/* Smooth scroll link */}
                                </MenuItem>
                                <MenuItem className="nav-item">
                                    <a href="#cart" onClick={() => setToggled(false)}>Cart</a> {/* Smooth scroll link */}
                                </MenuItem>
                                <MenuItem className="nav-item">
                                    <a href="#about-section" onClick={() => setToggled(false)}>About</a> {/* Smooth scroll link */}
                                </MenuItem>
                                <MenuItem className="nav-item">
                                    <a href="#footer" onClick={() => setToggled(false)}>Contact</a> {/* Smooth scroll link */}
                                </MenuItem>
                            </Menu>
                        </nav>
                    </Sidebar>
                    :
                    <nav className="navbar">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <a href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#product">Menu</a> {/* Smooth scroll a */}
                            </li>
                            <li className="nav-item">
                                <a href="#about-section">About</a> {/* Smooth scroll a */}
                            </li>
                            <li className="nav-item">
                                <a href="#review-card">Reviews</a> {/* Smooth scroll a */}
                            </li>
                            <li className="nav-item">
                                <a href="#footer">Contact</a> {/* Smooth scroll link */}
                            </li>
                        </ul>
                        <button id="add-to-cart" className="add-to-cart">
                            <div id="notify" className="notify"></div>
                            <Link to="/orders"><img src={cartImg} alt="cart" /></Link> {/* Navigates to Orders page */}
                        </button>
                    </nav>
            }
        </header>
    );
}
