import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Field from './Field';

const RegisterForm = ({ onValueChange, onSubmit, error }) => (
  <div className="register-form">
    <div className="register-form__controls">
      <Button appearance="secondary" title="Voltar para listagem" label="Ver produtos" url="/" />
    </div>

    <form className="form register-form__form" onSubmit={(e) => onSubmit(e)}>
      {
        error
        ? (
          <div className="form__error">
            {error}
          </div>
        )
        : ''
      }

      <Field onInput={onValueChange} name="email" type="email" label="E-mail" placeholder="nome@provedor.com" required/>
      <Field onInput={onValueChange} name="password" type="password" label="Senha" placeholder="******" required/>
      <div className="form__fieldset form__fieldset--controls">
        <Button type="submit" label="Cadastrar conta" />
      </div>
    </form>
  </div>
);

RegisterForm.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
};

RegisterForm.defaultProps = {
  error: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.'
};

export default RegisterForm;
