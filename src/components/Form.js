import React from 'react';
import PropTypes from 'prop-types';
import Heading from './Heading';

const Form = ({
  children,
  errorMsg,
  heading,
  isLoading,
  onSubmit,
  successMsg,
}) => (
  <div className="form">
    {heading ? (<Heading Tag="h2">{heading}</Heading>) : null}

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
  heading: PropTypes.string,
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  successMsg: PropTypes.string,
};

Form.defaultProps = {
  errorMsg: '',
  heading: '',
  isLoading: false,
  successMsg: '',
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
