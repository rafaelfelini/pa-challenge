import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Field from './Field';
import HeaderControls from './HeaderControls';

const LoginForm = ({ onValueChange, onSubmit, onResetPassword, errorMsg }) => (
  <div className="login-form">
    <HeaderControls>
      <Button appearance="secondary" title="Voltar para listagem" label="Ver produtos" url="/" />
    </HeaderControls>

    <form className="form login-form__form" onSubmit={(e) => { onSubmit(e); }}>
      {
        errorMsg
        ? (
          <div className="form__error">
            {errorMsg}
          </div>
        )
        : ''
      }

      <Field
        onInput={onValueChange}
        name="email"
        type="email"
        label="E-mail"
        placeholder="nome@provedor.com"
        required
      />
      <Field
        onInput={onValueChange}
        name="password"
        type="password"
        label="Senha"
        placeholder="******"
      />

    <div className="form__fieldset form__fieldset--controls" onSubmit={onSubmit}>
        <Button type="button" label="Resetar senha" appearance="secondary" onClick={onResetPassword} />
        <Button type="submit" label="Entrar" />
      </div>
    </form>
  </div>
);

LoginForm.propTypes = {
  errorMsg: PropTypes.string,
  onResetPassword: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  errorMsg: ''
};

export default LoginForm;
