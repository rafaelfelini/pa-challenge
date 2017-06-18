import React from 'react';
import PropTypes from 'prop-types';

const Field = ({name, label, onInput, placeholder, required, type }) => (
  <div className="field">
    {label ? (<label className="field__label">{label}</label>) : ''}
    <input className="field__input" name={name} onInput={onInput} placeholder={placeholder} type={type} required={required} />
  </div>
);

Field.propTypes = {
  name: PropTypes.string.isRequired,
  onInput: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.oneOf([ 'text', 'search', 'number', 'email', 'password' ]),
};

Field.defaultProps = {
  onInput: undefined,
  placeholder: '',
  required: false,
  type: 'text',
};

export default Field;
