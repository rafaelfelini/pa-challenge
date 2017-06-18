import React from 'react'
import { auth } from '../utils/firebase/auth'
import RegisterForm from './RegisterForm'

function setErrorMsg(error) {
  return {
    error: error.message
  }
}

class RegisterFormContainer extends React.Component {
  state = {
    email: '',
    password: '',
    error: null
  }

  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.state.email, this.state.password)
      .catch(e => this.setState(setErrorMsg(e)))
  }

  valueChange(e) {
    const state = this.state;
    state[e.target.name] = e.target.value;

    this.setState({ state });
  }

  render () {
    return (
      <RegisterForm error={this.state.error} onValueChange={this.valueChange.bind(this)} onSubmit={this.handleSubmit.bind(this)} />
    );
  }
}

export default RegisterFormContainer;
