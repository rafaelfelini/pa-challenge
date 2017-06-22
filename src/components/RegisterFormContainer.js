import React from 'react'
import { auth } from '../utils/data/auth'
import RegisterForm from './RegisterForm'

class RegisterFormContainer extends React.Component {
  state = {
    email: '',
    errorMsg: '',
    name: '',
    password: '',
    phoneNumber: '',
    isSubmiting: false,
  }

  handleSubmit(e) {
    e.preventDefault()

    this.setState({ isSubmiting: true })

    const {
      email,
      name,
      password,
      phoneNumber,
    } = this.state;

    auth({
      email,
      name,
      password,
      phoneNumber,
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
