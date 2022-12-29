import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="container">
            <div className="logo">Quotes</div>
            <ul className="navmenu">
                <li>Overview</li>
                <li>Search</li>
            </ul>
        </div>
    )
}

export default Navbar;