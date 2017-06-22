import React from 'react'
import { userGet, userUpdate } from '../utils/data/user'
import AccountForm from './AccountForm'

class AccountFormContainer extends React.Component {
  state = {
    uid: null,
    email: '',
    name: '',
    phoneNumber: '',
    errorMsg: '',
    successMsg: '',
    isLoading: true,
  }

  componentWillMount() {
    this.getUserInfo()
  }

  getUserInfo() {
    userGet().then((userInfo) => {
      this.setState({
        uid: userInfo.uid,
        email: userInfo.email,
        name: userInfo.name,
        phoneNumber: userInfo.phoneNumber,
        isLoading: false,
      });
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const {
      uid,
      email,
      name,
      phoneNumber,
    } = this.state

    this.setState({
      isSubmiting: true
    })

    userUpdate({
      uid,
      email,
      name,
      phoneNumber,
    })
      .then(() => {
        this.setState({
          isSubmiting: false,
          successMsg: 'Dados alterados com sucesso'
        })
      })
      .catch((error) => {
        this.setState({
          isSubmiting: false,
          errorMsg: 'Ocorreu um problema ao alterar os dados'
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
      email,
      errorMsg,
      successMsg,
      isLoading,
      isSubmiting,
      name,
      phoneNumber,
    } = this.state

    return (
      <AccountForm
        email={email}
        errorMsg={errorMsg}
        successMsg={successMsg}
        isLoading={isLoading}
        isSubmiting={isSubmiting}
        name={name}
        phoneNumber={phoneNumber}
        onValueChange={this.valueChange.bind(this)}
        onSubmit={this.handleSubmit.bind(this)}
      />
    );
  }
}

export default AccountFormContainer;
