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

    <div className="product-detail__container">
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
      </div>
    </div>
  </div>
);

ProductDetail.propTypes = {
  description: PropTypes.string,
  images: PropTypes.array,
  isLoading: PropTypes.bool,
  price: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  title: PropTypes.string,
};

ProductDetail.defaultProps = {
  description: undefined,
  images: undefined,
  isLoading: true,
  price: undefined,
  title: undefined,
};

export default ProductDetail;
