import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import ProductItem from './ProductItem';
import Heading from './Heading';
import { HeaderControls, HeaderControlsSection } from './HeaderControls';

const ProductBuy = ({
  description,
  images,
  id,
  price,
  title,
  children,
}) => (
  <div className="product-buy">
    <HeaderControls>
      <HeaderControlsSection>
        <Button appearance="secondary" title="Voltar para listagem" label="Ver produtos" url="/" />
      </HeaderControlsSection>
    </HeaderControls>

    <main className="product-buy__container">
      <Heading Tag="h2">
        Confirmar compra
      </Heading>

      <ProductItem
        description={description}
        images={images}
        id={id}
        price={price}
        title={title}
      />

      {children}
    </main>
  </div>
);

ProductBuy.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string,
  images: PropTypes.array,
  price: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  title: PropTypes.string,
};

ProductBuy.defaultProps = {
  description: undefined,
  images: undefined,
  price: undefined,
  title: undefined,
};

export default ProductBuy;
