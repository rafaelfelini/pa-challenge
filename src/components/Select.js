import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  state = {
    value: this.props.defaultValue
  }

  handleChange(e) {
    const value = e.target.value;
    const { onChange } = this.props;

    this.setState({ value });

    if (onChange) {
      onChange(e);
    }
  }

  render() {
    const {
      disabled,
      label,
      name,
      required,
      readOnly,
      placeholder,
      options
    } = this.props;

    const { value } = this.state;

    const fieldProps = {
      className: `field__field field__field--select field__field--${value ? 'filled' : 'placeholder'}`,
      onChange: this.handleChange.bind(this),
      value,
      disabled,
      readOnly,
      tabIndex: readOnly ? '-1' : undefined,
      name,
      required
    };

    return (
      <div className="field">
        {label ? (<label className="field__label">{label}</label>) : ''}
        <select {...fieldProps}>
          {placeholder ? <option value=''>{placeholder}</option> : null}
          {
            options.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))
          }
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
    label: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired
  })),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool
};

Select.defaultProps = {
  defaultValue: '',
  disabled: false,
  onChange: undefined,
  options: [],
  placeholder: '',
  required: false,
  readOnly: false
};

export default Select;
