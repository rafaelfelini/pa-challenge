import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Field from './Field';
import UploaderContainer from './UploaderContainer';
import { Form, FormControls } from './Form';
import { HeaderControls, HeaderControlsSection } from './HeaderControls';

const ProductForm = ({ onValueChange, onSubmit, errorMsg, isSubmiting }) => (
  <div className="product-form">
    <HeaderControls>
      <HeaderControlsSection>
        <Button appearance="secondary" title="Voltar para listagem" label="Ver produtos" url="/" />
      </HeaderControlsSection>
    </HeaderControls>

    <div className="product-form__form">
      <Form
        onSubmit={onSubmit}
        errorMsg={errorMsg}
      >
        <Field
          onInput={onValueChange}
          name="title"
          type="text"
          label="Título do anúncio"
          placeholder="Bicicleta novinha de 1982"
          disabled={isSubmiting}
          required
        />
        <Field
          onInput={onValueChange}
          name="price"
          type="text"
          mask="currency"
          label="Valor"
          placeholder="R$ 100,00"
          disabled={isSubmiting}
          required
        />
        <Field
          onInput={onValueChange}
          name="description"
          type="textarea"
          label="Descrição"
          placeholder="Escreva a descrição do seu anúncio"
          disabled={isSubmiting}
        />

        <UploaderContainer
          onChange={onValueChange}
          name="images"
          label="Imagens do anúncio"
          accept="image/jpg, image/gif, image/png"
          multiple
        />

        <FormControls>
          <Button
            type="submit"
            label="Publicar anúncio"
            disabled={isSubmiting}
          />
        </FormControls>
      </Form>
    </div>
  </div>
);

ProductForm.propTypes = {
  errorMsg: PropTypes.string,
  isSubmiting: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

ProductForm.defaultProps = {
  errorMsg: '',
  isSubmiting: false,
};

export default ProductForm;
