import React from 'react';
import PropTypes from 'prop-types';

const Field = ({
  defaultValue,
  disabled,
  label,
  name,
  onInput,
  placeholder,
  readOnly,
  required,
  type,
}) => (
  <div className="field">
    {label ? (<label className="field__label">{label}</label>) : ''}
    <input
      className="field__input"
      defaultValue={defaultValue}
      disabled={disabled}
      name={name}
      onInput={onInput}
      placeholder={placeholder}
      readOnly={readOnly}
      required={required}
      type={type}
    />
  </div>
);

Field.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onInput: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.oneOf([ 'text', 'search', 'number', 'email', 'password' ]),
};

Field.defaultProps = {
  defaultValue: '',
  disabled: false,
  onInput: undefined,
  placeholder: '',
  readOnly: false,
  required: false,
  type: 'text',
};

export default Field;
