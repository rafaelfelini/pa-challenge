import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg'
import { logout } from '../utils/data/auth'
import Button from './Button'

const Header = ({ isAuthenticated }) => (
  <header className="header">
    <div className="header__content">
      <div className="header__container">
        <Link to="/" title="Ir para home" className="header__logo">
          <img src={logo} alt="WLX" width="35" />
        </Link>
        {
          isAuthenticated
          ? (
            <div className="header__actions">
              <Button label="Minha conta" url="/account"/>
              <Button label="Sair" onClick={() => { logout(); }}/>
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
