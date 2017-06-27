import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from './Loading';
import ProductBuy from './ProductBuy';
import ProductBuyForm from './ProductBuyForm';
import { getRealtime as productGetRealtime, update as productUpdate } from '../utils/data/product';
import { create as transactionCreate } from '../utils/data/transaction';

class ProductBuyContainer extends React.Component {
  state = {
    id: this.props.match.params.id,
    product: {},
    removed: false,
    isLoading: true,
    isSubmiting: false,
    errorMsg: '',
    cardName: '',
    cardExpirationDate: '',
    cardNumber: '',
    cardCvv: '',
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

  productSetSold (transictionId) {
    const { id } = this.state;
    productUpdate(id, { sold: true, transictionId });
  }

  realtimeGetProductInit() {
    const { id }= this.state;

    this.getRealtimeProducts = productGetRealtime(id, {
      onChildAdd: this.productAdd.bind(this),
      onChildChanged: this.productChange.bind(this),
      onChildRemoved: this.productRemove.bind(this),
    });
  }

  valueChange(e) {
    const state = this.state;
    state[e.target.name] = e.target.value;

    this.setState(state);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ isSubmiting: true });

    const {
      cardName,
      cardExpirationDate,
      cardNumber,
      cardCvv,
      id,
      product,
    } = this.state;

    const transactionData = {
      sellerId: product.userId,
      amount: product.price,
      cardName,
      cardExpirationDate,
      cardNumber,
      cardCvv,
      metadata: {
        productId: id
      }
    }

    transactionCreate(transactionData)
      .then((response) => {
        if (response.status === 'paid') {
          this.productSetSold(response.id)
        }
      })
      .catch((error) => {
        this.setState({
          isSubmiting: false,
          errorMsg: error.message
        })
      })
  }

  render () {
    const {
      id,
      product,
      removed,
      isLoading,
      errorMsg,
      isSubmiting,
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
      <ProductBuy id={id} {...product}>
        <ProductBuyForm
          errorMsg={errorMsg}
          isSubmiting={isSubmiting}
          onValueChange={this.valueChange.bind(this)}
          onSubmit={this.handleSubmit.bind(this)}
        />
      </ProductBuy>
    );
  }
}

export default ProductBuyContainer;
