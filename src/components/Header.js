/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import { CiMenuKebab } from "react-icons/ci";


export default function Header(){
    const [toggled, setToggled] = React.useState(false);

    return(
        <header>
            <CiMenuKebab className="hamburger" onClick={() => setToggled(!toggled)}/>
            {
                window.innerWidth<600 ? 
                    <Sidebar 
                        onBackdropClick={() => setToggled(false)} 
                        toggled={toggled} 
                        breakPoint="always" 
                        image="https://i.pinimg.com/564x/ee/17/91/ee1791186d610736dd3ce5e24714196a.jpg"
                        rtl
                    >
                    <nav className="navbar">
                        <Menu>
                            <MenuItem className="nav-item" href="#">Home</MenuItem>
                            <MenuItem className="nav-item" href="#product">Menu</MenuItem>
                            <MenuItem className="nav-item" href="#about-section">About</MenuItem>
                            <MenuItem className="nav-item" href="#footer">Contact</MenuItem>
                        </Menu >
                    </nav>
                    </Sidebar>

                    :

                    <nav className="navbar">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#">Home</a></li>
                        <li className="nav-item"><a href="#product">Menu</a></li>
                        <li className="nav-item"><a href="#about-section">About</a></li>
                        <li className="nav-item"><a href="#review-card">Reviews</a></li>
                        <li className="nav-item"><a href="#footer">Contact</a></li>
                    </ul>
                </nav>
        
        
        }    
      
        </header>
    )
}