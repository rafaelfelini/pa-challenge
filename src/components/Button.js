import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({appearance, label, url, title, onClick}) => {
  const Element = url ? Link : 'button';

  const attrs = {
    to: url,
    title,
    onClick,
  };

  return (
    <Element {...attrs} className={`button button--${appearance}`}>
      {label}
    </Element>
  );
}

Button.propTypes = {
  appearance: PropTypes.oneOf([ 'primary', 'secondary' ]),
  url: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  appearance: 'primary',
  url: undefined,
  label: '',
  onClick: undefined,
};

export default Button;
