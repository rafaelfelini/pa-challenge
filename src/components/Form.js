import React from 'react';
import PropTypes from 'prop-types';
import Heading from './Heading';
import Loading from './Loading';

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
      ? <Loading />
      : (
        <form className="form__form" onSubmit={(e) => { onSubmit(e); }}>
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
          {children}
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

const FormFieldset = ({children, heading}) => (
  <div className="form__fieldset">
    {heading ? (<Heading Element="h3">{heading}</Heading>) : null}
    {children}
  </div>
);

FormFieldset.propTypes = {
  heading: PropTypes.string
}

FormFieldset.defaultProps = {
  heading: ''
}

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
