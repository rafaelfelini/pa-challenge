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
}) => {

  let FieldTag = 'input'
  const fieldProps = {
    className: `field__input field__input--${type}`,
    defaultValue,
    disabled,
    name,
    onInput,
    placeholder,
    readOnly,
    required,
  }

  if (type === 'textarea') {
    FieldTag = 'textarea'
    fieldProps.rows = 3
  } else {
    fieldProps.type = type
  }

  return (
    <div className="field">
      {label ? (<label className="field__label">{label}</label>) : ''}
      <FieldTag {...fieldProps} />
    </div>
  );
}

Field.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onInput: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.oneOf([ 'text', 'textarea', 'search', 'number', 'email', 'password' ]),
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
