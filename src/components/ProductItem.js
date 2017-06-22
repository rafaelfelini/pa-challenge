import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logoGrey from '../img/logo-grey.svg';
import formatCurrency from '../utils/format-currency';

const ProductItem = ({
  description,
  images,
  id,
  price,
  title,
}) => (
  <Link to={`/product/${id}`} className="product-item">
    <div
      className="product-item__photo"
      style={!images ? {backgroundImage: `url(${logoGrey})`} : null}
    >
      {
        images
        ? (<img className="product-item__img" src={images[0]} alt={title} />)
        : ''
      }
    </div>

    <div className="product-item__content">
      <h4 className="product-item__heading">
        {title}
      </h4>
      {
        description
        ? (<p className="product-item__description">{description.substring(0, 48)}...</p>)
        : ''
      }
      <h5 className="product-item__price">
        {formatCurrency(price)}
      </h5>
    </div>
  </Link>
);

ProductItem.propTypes = {
  description: PropTypes.string,
  images: PropTypes.array,
  id: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
  title: PropTypes.string.isRequired,
};

ProductItem.defaultProps = {
  description: undefined,
  images: undefined,
};

export default ProductItem;
