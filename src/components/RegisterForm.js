import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormFieldset, FormControls } from './Form';
import { HeaderControls, HeaderControlsSection } from './HeaderControls';
import Button from './Button';
import Field from './Field';
import Select from './Select';

const RegisterForm = ({ onValueChange, onSubmit, errorMsg, isSubmiting }) => (
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
        heading="Cadastrar conta"
      >
        <FormFieldset heading="Dados cadastrais">
          <Field
            onInput={onValueChange}
            name="name"
            type="text"
            label="Nome completo"
            placeholder="Seu nome"
            disabled={isSubmiting}
            required
          />
          <Field
            onInput={onValueChange}
            name="phoneNumber"
            type="text"
            label="Telefone (sem DDI ou DDD)"
            placeholder="996012345"
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
        </FormFieldset>

        <FormFieldset heading="Endereço">
          <Field
            onInput={onValueChange}
            name="addressZipcode"
            type="text"
            label="CEP"
            placeholder="00000-000"
            disabled={isSubmiting}
            required
          />
          <Field
            onInput={onValueChange}
            name="addressStreet"
            type="text"
            label="Rua"
            placeholder="Rua do roncador"
            disabled={isSubmiting}
            required
          />
          <Field
            onInput={onValueChange}
            name="addressNumber"
            type="text"
            label="Número"
            placeholder="1245"
            disabled={isSubmiting}
            required
          />
          <Field
            onInput={onValueChange}
            name="addressNeighborhood"
            type="text"
            label="Bairro"
            placeholder="Conjunto Vendedores"
            disabled={isSubmiting}
            required
          />
          <Field
            onInput={onValueChange}
            name="addressCity"
            type="text"
            label="Cidade"
            placeholder="Londrina"
            disabled={isSubmiting}
            required
          />
          <Field
            onInput={onValueChange}
            name="addressUf"
            type="text"
            label="Estado"
            placeholder="PR"
            disabled={isSubmiting}
            required
          />
        </FormFieldset>

        <FormFieldset heading="Dados bancários">
          <Select
            onChange={onValueChange}
            name="accountBank"
            label="Banco"
            placeholder="Selecione o banco"
            disabled={isSubmiting}
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
            onChange={onValueChange}
            name="accountType"
            label="Tipo de conta bancária"
            placeholder="Selecione o tipo"
            disabled={isSubmiting}
            options={[
              { value: 'conta_corrente', label: 'Conta Corrente' },
              { value: 'conta_poupanca', label: 'Conta Poupanca' },
              { value: 'conta_corrente_conjunta', label: 'Conta Corrente Conjunta' },
              { value: 'conta_poupanca_conjunta', label: 'Conta Poupanca Conjunta' }
            ]}
          />
          <Field
            onInput={onValueChange}
            name="accountAgency"
            type="text"
            label="Agência"
            placeholder="12345"
            maxlength="7"
            disabled={isSubmiting}
            required
          />
          <Field
            onInput={onValueChange}
            name="accountNumber"
            type="text"
            label="Conta"
            placeholder="1234567890123-12"
            maxlength="16"
            disabled={isSubmiting}
            required
          />
          <Field
            onInput={onValueChange}
            name="documentNumber"
            type="text"
            label="CPF do Titular"
            placeholder="111.222.333-12"
            maxlength="14"
            disabled={isSubmiting}
            required
          />
        </FormFieldset>

        <FormControls>
          <Button
            type="submit"
            label="Cadastrar conta"
            disabled={isSubmiting}
          />
        </FormControls>
      </Form>
    </div>
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
