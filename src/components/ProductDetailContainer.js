import React from 'react'
import { Redirect } from 'react-router-dom'
import Loading from './Loading'
import ProductDetail from './ProductDetail'
import { get as productGet } from '../utils/data/product';

class ProductDetailContainer extends React.Component {
  state = {
    product: {},
    removed: false,
    isLoading: true,
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
    this.setState({
      product,
      isLoading: false,
    });
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
      isLoading,
    } = this.state;

    if (removed) {
      return (
        <Redirect to="/" />
      );
    }

    if (isLoading) {
      return (
        <Loading />
      );
    }

    return (
      <ProductDetail {...product} />
    );
  }
}

export default ProductDetailContainer;
