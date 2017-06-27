import React from 'react'
import { Redirect } from 'react-router-dom'
import Loading from './Loading'
import ProductDetail from './ProductDetail'
import { getRealtime as productGetRealtime } from '../utils/data/product';

class ProductDetailContainer extends React.Component {
  state = {
    id: this.props.match.params.id,
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
    const { id } = this.state;

    this.getRealtimeProducts = productGetRealtime(id, {
      onChildAdd: this.productAdd.bind(this),
      onChildChanged: this.productChange.bind(this),
      onChildRemoved: this.productRemove.bind(this),
    });
  }

  render () {
    const {
      id,
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

    if (product.sold) {
      return (
        <Redirect to={`/product/${id}/sold`} />
      );
    }

    return (
      <ProductDetail id={id} {...product} />
    );
  }
}

export default ProductDetailContainer;
