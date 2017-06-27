import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormFieldset, FormControls } from './Form';
import { HeaderControls, HeaderControlsSection } from './HeaderControls';
import Button from './Button';
import Field from './Field';
import Select from './Select';

const AccountForm = ({
  email,
  name,
  phoneNumber,
  accountBank,
  accountType,
  accountAgency,
  accountNumber,
  documentNumber,
  errorMsg,
  successMsg,
  isLoading,
  isSubmiting,
  onSubmit,
  onValueChange,
}) => (
  <div className="account-form">
    <HeaderControls>
      <HeaderControlsSection>
        <Button appearance="secondary" title="Voltar para listagem" label="Ver produtos" url="/" />
      </HeaderControlsSection>
    </HeaderControls>

    <div className="account-form__form">
      <Form
        onSubmit={onSubmit}
        errorMsg={errorMsg}
        successMsg={successMsg}
        isLoading={isLoading}
        heading="Minha conta"
      >
        <FormFieldset heading="Dados cadastrais">
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
            label="Telefone (sem DDI ou DDD)"
            placeholder="996012345"
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
        </FormFieldset>

        <FormFieldset heading="Dados bancários">
          <Select
            name="accountBank"
            defaultValue={accountBank}
            label="Banco"
            placeholder="Selecione o banco"
            readOnly
            options={[
              { value: '001', label: 'Banco do Brasil S.A.' },
              { value: '341', label: 'Banco Itaú S.A.' },
              { value: '033', label: 'Banco Santander (Brasil) S.A.' },
              { value: '356', label: 'Banco Real S.A. (antigo)' },
              { value: '652', label: 'Itaú Unibanco Holding S.A.' },
              { value: '237', label: 'Banco Bradesco S.A.' },
              { value: '745', label: 'Banco Citibank S.A.' },
              { value: '399', label: 'HSBC Bank Brasil S.A. – Banco Múltiplo' },
              { value: '104', label: 'Caixa Econômica Federal' },
              { value: '389', label: 'Banco Mercantil do Brasil S.A.' },
              { value: '453', label: 'Banco Rural S.A.' },
              { value: '422', label: 'Banco Safra S.A.' },
              { value: '633', label: 'Banco Rendimento S.A.' }
            ]}
            required
          />
          <Select
            name="accountType"
            defaultValue={accountType}
            label="Tipo de conta bancária"
            placeholder="Selecione o tipo"
            readOnly
            options={[
              { value: 'conta_corrente', label: 'Conta Corrente' },
              { value: 'conta_poupanca', label: 'Conta Poupanca' },
              { value: 'conta_corrente_conjunta', label: 'Conta Corrente Conjunta' },
              { value: 'conta_poupanca_conjunta', label: 'Conta Poupanca Conjunta' }
            ]}
          />
          <Field
            name="accountAgency"
            defaultValue={accountAgency}
            type="text"
            label="Agência"
            placeholder="12345"
            maxlength="7"
            readOnly
            required
          />
          <Field
            name="accountNumber"
            defaultValue={accountNumber}
            type="text"
            label="Conta"
            placeholder="1234567890123-12"
            maxlength="16"
            readOnly
            required
          />
          <Field
            name="documentNumber"
            defaultValue={documentNumber}
            type="text"
            label="CPF do Titular"
            placeholder="111.222.333-12"
            maxlength="14"
            readOnly
            required
          />
        </FormFieldset>

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
  name: PropTypes.string,
  phoneNumber: PropTypes.string,
  accountBank: PropTypes.string,
  accountType: PropTypes.string,
  accountAgency: PropTypes.string,
  accountNumber: PropTypes.string,
  documentNumber: PropTypes.string,
  errorMsg: PropTypes.string,
  isSubmiting: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

AccountForm.defaultProps = {
  email: '',
  name: '',
  phoneNumber: '',
  accountBank: '',
  accountType: '',
  accountAgency: '',
  accountNumber: '',
  documentNumber: '',
  errorMsg: '',
  isSubmiting: false,
};

export default AccountForm;
