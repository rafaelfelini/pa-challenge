import React from 'react';
import PropTypes from 'prop-types';
import formatCurrency from '../utils/format-currency';

// const Field = () =>

class Field extends React.Component {
  state = {
    value: this.props.defaultValue
  }

  handleInput(e) {
    e.persist();

    const {
      onInput,
      mask,
    } = this.props;

    let value;

    switch (mask) {
      case 'currency':
        value = formatCurrency(e.target.value);
        break;
      default:
        value = e.target.value;
    }

    this.setState({ value }, () => {
      if (onInput) {
        onInput(e);
      }
    })
  }

  render() {
    const {
      disabled,
      label,
      name,
      placeholder,
      readOnly,
      required,
      type,
    } = this.props;

    const { value } = this.state;

    let FieldTag = 'input';

    const fieldProps = {
      className: `field__input field__input--${type}`,
      onInput: this.handleInput.bind(this),
      value,
      disabled,
      name,
      placeholder,
      readOnly,
      required,
    };

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
}

Field.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  mask: PropTypes.oneOf([ 'currency' ]),
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
  mask: undefined,
  onInput: undefined,
  placeholder: '',
  readOnly: false,
  required: false,
  type: 'text',
};

export default Field;
