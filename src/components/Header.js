import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button'
import logo from '../img/logo.svg'

const Header = ({ isAuthenticated }) => (
  <header className="header">
    <div className="header__container">
      <div className="header__logo">
        <img src={logo} alt="WLX" width="35" />
      </div>

        {
          isAuthenticated
          ? (
            <div className="header__actions">
              <Button label="Minha conta" url="/account"/>
              <Button label="Sair" url="/logout"/>
            </div>
          )
          : (
            <div className="header__actions">
              <Button label="Entrar" url="/login"/>
              <Button label="Cadastrar" url="/register"/>
            </div>
          )
        }
    </div>
  </header>
);

Header.propTypes = {
  isAuthenticated: PropTypes.bool
}

Header.defaultProps = {
  isAuthenticated: false
}

export default Header;
