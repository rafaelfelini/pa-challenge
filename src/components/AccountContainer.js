import React from 'react'
import { userInfoGet, userInfoUpdate } from '../utils/firebase/user-info'
import AccountForm from './AccountForm'

class AccountContainer extends React.Component {
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
    userInfoGet().then((userInfo) => {
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

    userInfoUpdate({
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

export default AccountContainer;
