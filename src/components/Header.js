/* eslint-disable jsx-a11y/anchor-is-valid */
import { CiMenuKebab } from "react-icons/ci";

export default function Header(){
    return(
        <header>
            <CiMenuKebab className="hamburger"/>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#">Home</a></li>
                    <li className="nav-item"><a href="#product">Menu</a></li>
                    <li className="nav-item"><a href="#about-section">About</a></li>
                    <li className="nav-item"><a href="#review-card">Reviews</a></li>
                    <li className="nav-item"><a href="#footer">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}