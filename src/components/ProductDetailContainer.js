import React from 'react'
import { Redirect } from 'react-router-dom'
import ProductDetail from './ProductDetail'
import { get as productGet } from '../utils/firebase/product';

class ProductDetailContainer extends React.Component {
  state = {
    product: {},
    removed: false,
  }

  componentWillMount() {
    this.realtimeGetProductInit();
  }

  componentWillUnmount() {
    this.realtimeGetProductClose();
  }

  realtimeGetProductClose() {
    this.getRealtimeProducts.off();
  }

  productAdd(product) {
    this.setState({ product });
  }

  productChange(product) {
    this.setState({ product });
  }

  productRemove() {
    this.setState({ removed: true });
  }

  realtimeGetProductInit() {
    const id = this.props.match.params.id;

    this.getRealtimeProducts = productGet(id, {
      onChildAdd: this.productAdd.bind(this),
      onChildChanged: this.productChange.bind(this),
      onChildRemoved: this.productRemove.bind(this),
    });
  }

  render () {
    const {
      product,
      removed,
    } = this.state;

    if (removed) {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <ProductDetail {...product} />
    );
  }
}

export default ProductDetailContainer;
