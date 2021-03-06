import React from 'react'
import { Redirect } from 'react-router-dom'
import { create as productCreate } from '../utils/data/product'
import ProductForm from './ProductForm'

class ProductFormContainer extends React.Component {
  state = {
    description: '',
    errorMsg: '',
    price: '',
    productKey: '',
    title: '',
    images: [],
  }

  handleSubmit(e) {
    e.preventDefault()

    this.setState({ isSubmiting: true })

    const {
      images,
      title,
      price,
      description,
    } = this.state;


    productCreate({
      price: parseInt(price.replace(/[^0-9]/g, ''), 10),
      images,
      title,
      description,
    })
    .then((response) => {
      this.setState({
        productKey: response.key
      })
    })
    .catch((error) => {
      this.setState({
        errorMsg: 'Ocorreu um problema ao publicar o anúncio'
      })
    })
  }

  valueChange(e) {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  render () {
    const {
      errorMsg,
      isSubmiting,
      productKey,
    } = this.state;

    if (productKey) {
      return <Redirect to={`/product/${productKey}`}/>;
    }

    return (
      <ProductForm
        errorMsg={errorMsg}
        isSubmiting={isSubmiting}
        onValueChange={this.valueChange.bind(this)}
        onSubmit={this.handleSubmit.bind(this)}
      />
    );
  }
}

export default ProductFormContainer;
