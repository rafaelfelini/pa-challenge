import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({appearance, label, type, url, title, onClick, disabled}) => {
  const Element = url ? Link : 'button';

  const attrs = {
    onClick,
    title,
    to: url,
    type,
    disabled,
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
  disabled: PropTypes.bool,
  type: PropTypes.oneOf([ 'button', 'submit' ]),
  url: PropTypes.string,
};

Button.defaultProps = {
  appearance: 'primary',
  label: '',
  onClick: undefined,
  disabled: undefined,
  type: undefined,
  url: undefined,
};

export default Button;
