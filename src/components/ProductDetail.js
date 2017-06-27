import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import ProductGallery from './ProductGallery';
import { HeaderControls, HeaderControlsSection } from './HeaderControls';
import logoGrey from '../img/logo-grey.svg';
import formatCurrency from '../utils/format-currency';

const ProductDetail = ({
  description,
  images,
  id,
  price,
  title,
}) => (
  <div className="product-detail">
    <HeaderControls>
      <HeaderControlsSection>
        <Button appearance="secondary" title="Voltar para listagem" label="Ver produtos" url="/" />
      </HeaderControlsSection>
    </HeaderControls>

    <main className="product-detail__container">
      <div
        className="product-detail__gallery"
        style={!images ? {backgroundImage: `url(${logoGrey})`} : null}
      >
        <ProductGallery images={images} />
      </div>

      <div className="product-detail__content">
        <h4 className="product-detail__heading">
          {title}
        </h4>

        <h5 className="product-detail__price">
          {formatCurrency(price)}
        </h5>

        {
          description
          ? (<p className="product-detail__description">{description}</p>)
          : ''
        }

        <div className="product-detail__controls">
          <Button url={`/product/${id}/buy`} label="Comprar produto" />
        </div>
      </div>
    </main>
  </div>
);

ProductDetail.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string,
  images: PropTypes.array,
  price: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
  title: PropTypes.string.isRequired,
};

ProductDetail.defaultProps = {
  description: undefined,
  images: undefined,
};

export default ProductDetail;
