import React from 'react'
import { create as authCreate } from '../utils/data/auth'
import RegisterForm from './RegisterForm'

class RegisterFormContainer extends React.Component {
  state = {
    errorMsg: '',
    isSubmiting: false,

    email: '',
    name: '',
    password: '',
    phoneNumber: '',
    accountBank: '',
    accountType: '',
    accountAgency: '',
    accountNumber: '',
    documentNumber: '',
    addressZipcode: '',
    addressStreet: '',
    addressNeighborhood: '',
    addressNumber: '',
    addressCity: '',
    addressUf: '',
  }

  handleSubmit(e) {
    e.preventDefault()

    this.setState({ isSubmiting: true })

    const {
      email,
      name,
      password,
      phoneNumber,
      accountBank,
      accountType,
      accountAgency,
      accountNumber,
      documentNumber,
      addressZipcode,
      addressStreet,
      addressNeighborhood,
      addressNumber,
      addressCity,
      addressUf,
    } = this.state;

    authCreate({
      email,
      name,
      password,
      accountBank,
      accountType,
      accountAgency,
      accountNumber,
      documentNumber,
      phone: {
        number: phoneNumber
      },
      address: {
        zipcode: addressZipcode,
        street: addressStreet,
        neighborhood: addressNeighborhood,
        number: addressNumber,
        city: addressCity,
        uf: addressUf,
      }
    })
      .catch((error) => {
        this.setState({
          isSubmiting: false,
          errorMsg: error.message
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
    } = this.state;

    return (
      <RegisterForm
        errorMsg={errorMsg}
        isSubmiting={isSubmiting}
        onValueChange={this.valueChange.bind(this)}
        onSubmit={this.handleSubmit.bind(this)}
      />
    );
  }
}

export default RegisterFormContainer;
