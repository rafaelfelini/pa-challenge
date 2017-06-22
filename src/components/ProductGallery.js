import React from 'react';
import PropTypes from 'prop-types';
import logoGrey from '../img/logo-grey.svg';

class ProductGallery extends React.Component {
  state = {
    mainImage: this.props.image ? this.props.image[0] : undefined
  }

  handleGalleryNavigation(e) {
    this.setState({
      mainImage: e.target.src
    });
  }

  render() {
    const { images } = this.props;
    const { mainImage } = this.state;

    return (
      <div className="product-gallery">
        <div
          className="product-gallery__main"
          style={!mainImage ? {backgroundImage: `url(${logoGrey})`} : null}
        >
          {
            mainImage
            ? (<img className="product-gallery__main__img" src={mainImage} alt="" />)
            : ''
          }
        </div>

        {
          images
          ? (
            <div className="product-gallery__nav">
              {
                images.map((image, index) => (
                  <div key={index} className="product-gallery__nav__item">
                    <img
                      onClick={this.handleGalleryNavigation.bind(this)}
                      className="product-gallery__nav__img"
                      src={image}
                      alt=""
                    />
                  </div>
                ))
              }
            </div>
          )
          : ''
        }

      </div>
    );
  }
}

ProductGallery.propTypes = {
  images: PropTypes.array,
};

ProductGallery.defaultProps = {
  images: undefined,
};

export default ProductGallery;
