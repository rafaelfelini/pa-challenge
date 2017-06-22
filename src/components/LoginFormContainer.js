import React from 'react'
import { login, resetPassword } from '../utils/data/auth'
import LoginForm from './LoginForm'

class LoginFormContainer extends React.Component {
  state = {
    email: '',
    password: '',
    errorMsg: '',
    isSubmiting: false,
  }

  handleSubmit(e) {
    e.preventDefault()

    this.setState({
      isSubmiting: true,
    })

    login(this.state.email, this.state.password)
      .catch((error) => {
          this.setState({
            errorMsg: 'Invalid username/password.',
            isSubmiting: false,
        })
      })
  }

  resetPassword() {
    resetPassword(this.state.email)
      .then(() => {
        this.setState({
          errorMsg: `Password reset email sent to ${this.state.email}.`
        })
      })
      .catch(() => {
        this.setState({
          errorMsg: 'Email address not found'
        })
      })
  }

  valueChange(e) {
    const state = this.state;
    state[e.target.name] = e.target.value;

    this.setState(state);
  }

  render () {
    const { errorMsg, isSubmiting } = this.state;

    return (
      <LoginForm
        errorMsg={errorMsg}
        isSubmiting={isSubmiting}
        onValueChange={this.valueChange.bind(this)}
        onSubmit={this.handleSubmit.bind(this)}
        onResetPassword={this.resetPassword.bind(this)}
      />
    );
  }
}

export default LoginFormContainer;
