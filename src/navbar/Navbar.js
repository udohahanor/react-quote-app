import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav>
                <div className="logo">Quotes</div>
                <ul className="nav-menu">
                    <li>Overview</li>
                    <li>Search</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;