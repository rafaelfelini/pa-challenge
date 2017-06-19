import React from 'react'
import ProductsList from './ProductsList'

class ProductsListContainer extends React.Component {
  state = {
    products: [],
  }

  render () {
    const {
      products,
    } = this.state;

    return (
      <ProductsList products={products} />
    );
  }
}

export default ProductsListContainer;
