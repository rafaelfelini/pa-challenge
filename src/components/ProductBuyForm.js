import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormFieldset, FormControls } from './Form';
import Button from './Button';
import Field from './Field';

const ProductBuyForm = ({
  onValueChange,
  onSubmit,
  onResetPassword,
  errorMsg,
  isSubmiting,
}) => (
  <div className="product-buy-form">
    <Form
      onSubmit={onSubmit}
      errorMsg={errorMsg}
    >
      <FormFieldset heading="Dados de pagamento">
        <Field
          onInput={onValueChange}
          name="cardName"
          autoComplete="cc-name"
          label="Nome do portador do cartão"
          placeholder="Digite o nome conforme no cartão"
          disabled={isSubmiting}
          required
        />

        <Field
          onInput={onValueChange}
          name="cardNumber"
          autoComplete="cc-number"
          label="Número do cartão"
          placeholder="0000 0000 0000 0000"
          disabled={isSubmiting}
          required
        />

        <Field
          onInput={onValueChange}
          name="cardCvv"
          autoComplete="cc-csc"
          label="Código verificador do cartão"
          placeholder="CVV"
          disabled={isSubmiting}
          required
        />

        <Field
          onInput={onValueChange}
          name="cardExpirationDate"
          autoComplete="cc-exp"
          label="Data de validade do cartão (formato: MM/AA)"
          placeholder="MM/AA"
          disabled={isSubmiting}
          required
        />


      </FormFieldset>
      <FormControls>
        <Button
          type="submit"
          label="Confirmar compra"
          disabled={isSubmiting}
        />
      </FormControls>
    </Form>
  </div>
);

ProductBuyForm.propTypes = {
  errorMsg: PropTypes.string,
  isSubmiting: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

ProductBuyForm.defaultProps = {
  errorMsg: '',
  isSubmiting: false,
};

export default ProductBuyForm;
