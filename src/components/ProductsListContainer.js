import React from 'react'
import ProductsList from './ProductsList'
import { getAllRealtime as productGetAllRealtime } from '../utils/data/product';

class ProductsListContainer extends React.Component {
  state = {
    products: [],
  }

  componentWillMount() {
    this.realtimeGetAllProductsInit();
  }

  componentWillUnmount() {
    this.realtimeGetAllProductsClose();
  }

  realtimeGetAllProductsClose() {
    this.getRealtimeProducts.off();
  }

  productAdd(id, data) {
    const { products } = this.state;

    products.push({
      id,
      ...data,
    });

    this.setState({ products });
  }

  productChange(id, data) {
    const { products } = this.state;
    const productIndex = products.findIndex((product) => product.id === id);

    if (productIndex !== -1) {
      products[productIndex] = {
        id,
        ...data
      };
    }

    this.setState({ products });
  }

  productRemove(id) {
    const { products } = this.state;
    const productIndex = products.findIndex((product) => product.id === id);

    if (productIndex !== -1) {
      products.splice(productIndex, 1);
    }

    this.setState({ products });
  }

  realtimeGetAllProductsInit() {
    this.getRealtimeProducts = productGetAllRealtime({
      onChildAdd: this.productAdd.bind(this),
      onChildChanged: this.productChange.bind(this),
      onChildRemoved: this.productRemove.bind(this),
    });
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
