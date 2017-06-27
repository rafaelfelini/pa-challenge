import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import ProductItem from './ProductItem';
import Heading from './Heading';
import { HeaderControls, HeaderControlsSection } from './HeaderControls';

const ProductSold = ({
  product,
  transaction,
}) => {

  const {
    description,
    images,
    id,
    price,
    title,
  } = product;

  return (
    <div className="product-sold">
      <HeaderControls>
        <HeaderControlsSection>
          <Button appearance="secondary" title="Voltar para listagem" label="Ver produtos" url="/" />
        </HeaderControlsSection>
      </HeaderControls>

      <main className="product-sold__container">
        <Heading Tag="h2">
          Produto comprado
        </Heading>

        <ProductItem
          description={description}
          images={images}
          id={id}
          price={price}
          title={title}
        />

        <Heading Tag="h3">
          Detalhes da compra
        </Heading>

        <div className="product-sold__detail">
          <pre>
            {JSON.stringify(transaction, null, 2)}
          </pre>
        </div>
      </main>
    </div>
  );
}

ProductSold.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string,
    images: PropTypes.array,
    price: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
    title: PropTypes.string,
  }).isRequired,
  transaction: PropTypes.shape().isRequired
};

export default ProductSold;
