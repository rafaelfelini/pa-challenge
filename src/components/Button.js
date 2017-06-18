import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({appearance, label, type, url, title, onClick}) => {
  const Element = url ? Link : 'button';

  const attrs = {
    onClick,
    title,
    to: url,
    type,
  };

  return (
    <Element {...attrs} className={`button button--${appearance}`}>
      {label}
    </Element>
  );
}

Button.propTypes = {
  appearance: PropTypes.oneOf([ 'primary', 'secondary' ]),
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([ 'button', 'submit' ]),
  url: PropTypes.string,
};

Button.defaultProps = {
  appearance: 'primary',
  label: '',
  onClick: undefined,
  type: 'button',
  url: undefined,
};

export default Button;
