import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Field from './Field';
import { HeaderControls, HeaderControlsSection } from './HeaderControls';
import ProductItem from './ProductItem';

const ProductsList = ({
  products
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
      {
        products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))
      }
    </div>
  </div>
);

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()),
};

ProductsList.defaultProps = {
  products: [],
};

export default ProductsList;
