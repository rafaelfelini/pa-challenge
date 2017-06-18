import React from 'react'
import { auth } from '../utils/firebase/auth'
import RegisterForm from './RegisterForm'

function setErrorMsg(error) {
  return {
    errorMsg: error.message
  }
}

class RegisterFormContainer extends React.Component {
  state = {
    email: '',
    password: '',
    errorMsg: ''
  }

  handleSubmit(e) {
    e.preventDefault()
    auth(this.state.email, this.state.password)
      .catch((error) => {
        this.setState(setErrorMsg(error))
      })
  }

  valueChange(e) {
    const state = this.state;
    state[e.target.name] = e.target.value;

    this.setState(state);
  }

  render () {
    return (
      <RegisterForm
        errorMsg={this.state.errorMsg}
        onValueChange={this.valueChange.bind(this)}
        onSubmit={this.handleSubmit.bind(this)}
      />
    );
  }
}

export default RegisterFormContainer;
