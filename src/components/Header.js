import React from 'react';
import logo from '../img/logo.svg'

const Header = () => (
  <header className="header">
    <div className="header__container">
      <div className="header__logo">
        <img src={logo} alt="WLX" width="35" />
      </div>
    </div>
  </header>
);

export default Header;
