import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Field from './Field';
import { Form, FormControls } from './Form';
import HeaderControls from './HeaderControls';

const LoginForm = ({
  onValueChange,
  onSubmit,
  onResetPassword,
  errorMsg,
  isSubmiting,
}) => (
  <div className="login-form">
    <HeaderControls>
      <Button appearance="secondary" title="Voltar para listagem" label="Ver produtos" url="/" />
    </HeaderControls>

    <div className="login-form__form">
      <Form
        onSubmit={onSubmit}
        errorMsg={errorMsg}
      >
        <Field
          onInput={onValueChange}
          name="email"
          type="email"
          label="E-mail"
          placeholder="nome@provedor.com"
          disabled={isSubmiting}
          required
        />

        <Field
          onInput={onValueChange}
          name="password"
          type="password"
          label="Senha"
          placeholder="******"
          disabled={isSubmiting}
        />

        <FormControls>
          <Button
            type="button"
            label="Resetar
            senha"
            appearance="secondary"
            onClick={onResetPassword}
            disabled={isSubmiting}
          />
          <Button
            type="submit"
            label="Entrar"
            disabled={isSubmiting}
          />
        </FormControls>
      </Form>
    </div>
  </div>
);

LoginForm.propTypes = {
  errorMsg: PropTypes.string,
  isSubmiting: PropTypes.bool,
  onResetPassword: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  errorMsg: '',
  isSubmiting: false,
};

export default LoginForm;
