import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Field from './Field';
import HeaderControls from './HeaderControls';

const RegisterForm = ({ onValueChange, onSubmit, errorMsg, isSubmiting }) => (
  <div className="register-form">
    <HeaderControls>
      <Button appearance="secondary" title="Voltar para listagem" label="Ver produtos" url="/" />
    </HeaderControls>

    <form className="form register-form__form" onSubmit={(e) => { onSubmit(e); }}>
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
        name="name"
        type="text"
        label="Nome"
        placeholder="Seu nome"
        disabled={isSubmiting}
        required
      />
      <Field
        onInput={onValueChange}
        name="phoneNumber"
        type="text"
        label="Telefone"
        placeholder="41 99912 3456"
        disabled={isSubmiting}
      />
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
        required
      />

      <div className="form__fieldset form__fieldset--controls">
        <Button
          type="submit"
          label="Cadastrar conta"
          disabled={isSubmiting}
        />
      </div>
    </form>
  </div>
);

RegisterForm.propTypes = {
  errorMsg: PropTypes.string,
  isSubmiting: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

RegisterForm.defaultProps = {
  errorMsg: '',
  isSubmiting: false,
};

export default RegisterForm;
