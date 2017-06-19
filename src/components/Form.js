import React from 'react';
import PropTypes from 'prop-types';

const Form = ({
  children,
  errorMsg,
  isLoading,
  onSubmit,
  successMsg,
}) => (
  <div className="form">
    {
      isLoading
      ? 'Carregando'
      : (
        <form className="form__form" onSubmit={(e) => { onSubmit(e); }}>
          {children}
          {
            errorMsg
            ? (
              <div className="form__error">
                {errorMsg}
              </div>
            )
            : ''
          }
          {
            successMsg
            ? (
              <div className="form__success">
                {successMsg}
              </div>
            )
            : ''
          }
        </form>
      )
    }
  </div>
);

Form.propTypes = {
  errorMsg: PropTypes.string,
  successMsg: PropTypes.string,
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

Form.defaultProps = {
  errorMsg: '',
  successMsg: '',
  isLoading: false,
};

const FormFieldset = ({children}) => (
  <div className="form__fieldset form__fieldset--controls">
    {children}
  </div>
);

const FormControls = ({children}) => (
  <div className="form__fieldset form__fieldset--controls">
    {children}
  </div>
);

export {
  Form,
  FormFieldset,
  FormControls,
};
