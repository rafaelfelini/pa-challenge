import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Field from './Field';
import { HeaderControls, HeaderControlsSection } from './HeaderControls';

const ProductsList = ({
  onValueChange,
  onSubmit,
  onResetPassword,
  errorMsg,
  isSubmiting,
}) => (
  <div className="products-list">
    <HeaderControls>
      <HeaderControlsSection>
        <Button appearance="secondary" title="Anunciar produto" label="Anunciar produto" url="/product/create" />
      </HeaderControlsSection>

      <HeaderControlsSection>
        <Field name="search" placeholder="Buscar" type="search" />
      </HeaderControlsSection>
    </HeaderControls>

    <div className="products-list__container">
      items
    </div>
  </div>
);

ProductsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()),
};

ProductsList.defaultProps = {
  items: [],
};

export default ProductsList;
