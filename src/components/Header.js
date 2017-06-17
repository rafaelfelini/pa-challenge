import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button'
import logo from '../img/logo.svg'

const Header = ({ isUserLoggedIn }) => (
  <header className="header">
    <div className="header__container">
      <div className="header__logo">
        <img src={logo} alt="WLX" width="35" />
      </div>

        {
          isUserLoggedIn
          ? (
            <div className="header__actions">
              <Button label="Minha conta" url="/account"/>
              <Button label="Sair" url="/logout"/>
            </div>
          )
          : (
            <div className="header__actions">
              <Button label="Entrar" url="/login"/>
            </div>
          )
        }
    </div>
  </header>
);

Header.propTypes = {
  isUserLoggedIn: PropTypes.bool
}

Header.defaultProps = {
  isUserLoggedIn: false
}

export default Header;
