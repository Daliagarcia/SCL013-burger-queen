import React from 'react';
import logoHeader from '../assets/images/logo1W.png';
import '../assets/css/LogoHeader.css';

const LogoHeader = () => {
    return (
        <div>
            <img src={logoHeader} className="Logo-Header" alt="logo" />
        </div>
    )
};

export default LogoHeader;