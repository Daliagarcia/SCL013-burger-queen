import React from 'react';
import logo from '../assets/images/logo2B.png';
import '../assets/css/Logo.css';

const Logo = () => {
    return (
        <div className = "Container-logo">
            <img src={logo} className="Logo-login" alt="logo" />
        </div>
    )
};

export default Logo;