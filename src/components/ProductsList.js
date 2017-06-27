import React from 'react';
import PropTypes from 'prop-types';
import { HeaderControls, HeaderControlsSection } from './HeaderControls';
import Button from './Button';
import Field from './Field';
import Loading from './Loading';
import ProductItem from './ProductItem';

const ProductsList = ({
  products,
  isLoading
}) => {

  return (
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
          isLoading ?
          (<Loading />)
          : products.length
          ? products.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))
          : <p className="products-list__text">Nenhum anúncio de produto cadastrado até o momento</p>
        }
      </div>
    </div>
  );
};

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()),
  isLoading: PropTypes.bool,
};

ProductsList.defaultProps = {
  products: [],
  isLoading: false
};

export default ProductsList;
