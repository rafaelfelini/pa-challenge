import React from 'react'
import Loading from './Loading'
import ProductSold from './ProductSold'
import { get as productGet } from '../utils/data/product';
import { get as transactionGet } from '../utils/data/transaction';

class ProductSoldContainer extends React.Component {
  state = {
    id: this.props.match.params.id,
    product: {},
    transaction: {},
    isLoading: true,
  }

  componentWillMount() {
    this.getData();
  }

  getData() {
    const { id } = this.state;

    productGet(id).then((product) => {
      product.id = id
      this.setState({ product });
      this.getTransaction(product.transactionId)
    });
  }

  getTransaction (id) {
    transactionGet(id).then((transaction) => {
      this.setState({
        transaction,
        isLoading: false
      })
    })
  }

  render () {
    const {
      id,
      product,
      transaction,
      isLoading,
    } = this.state;


    if (isLoading) {
      return (
        <Loading />
      );
    }

    return (
      <ProductSold id={id} product={product} transaction={transaction} />
    );
  }
}

export default ProductSoldContainer;
