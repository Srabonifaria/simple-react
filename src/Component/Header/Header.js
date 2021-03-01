import React from 'react';
import logo from '../../logo.jpg'
import './Header.css'
const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt=""/>
            <nav>
            <a href="/select">Select</a>
            <a href="/player">Player</a>
            <a href="/details">Details</a>
            </nav>
        </div>
    );
};

export default Header;