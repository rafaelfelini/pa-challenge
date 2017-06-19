import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Field from './Field';
import { Form, FormControls } from './Form';
import { HeaderControls, HeaderControlsSection } from './HeaderControls';

const AccountForm = ({
  email,
  errorMsg,
  successMsg,
  isLoading,
  isSubmiting,
  name,
  onSubmit,
  onValueChange,
  phoneNumber,
}) => (
  <div className="register-form">
    <HeaderControls>
      <HeaderControlsSection>
        <Button appearance="secondary" title="Voltar para listagem" label="Ver produtos" url="/" />
      </HeaderControlsSection>
    </HeaderControls>

    <div className="register-form__form">
      <Form
        onSubmit={onSubmit}
        errorMsg={errorMsg}
        successMsg={successMsg}
        isLoading={isLoading}
      >
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
          defaultValue={name}
          disabled={isSubmiting}
          required
        />

        <Field
          onInput={onValueChange}
          name="phoneNumber"
          type="text"
          label="Telefone"
          defaultValue={phoneNumber}
          disabled={isSubmiting}
          required
        />

        <Field
          name="email"
          type="email"
          label="E-mail"
          defaultValue={email}
          readOnly
          required
        />

        <FormControls>
          <Button
            type="submit"
            label="Alterar dados"
            disabled={isSubmiting}
          />
        </FormControls>
      </Form>
    </div>
  </div>
);

AccountForm.propTypes = {
  email: PropTypes.string,
  errorMsg: PropTypes.string,
  isSubmiting: PropTypes.bool,
  name: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  phoneNumber: PropTypes.string,
};

AccountForm.defaultProps = {
  email: '',
  errorMsg: '',
  isSubmiting: false,
  name: '',
  phoneNumber: '',
};

export default AccountForm;
