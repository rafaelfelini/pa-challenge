import React from 'react'
import { get as userGet, update as userUpdate } from '../utils/data/user'
import { get as recipienGet } from '../utils/data/recipients'
import AccountForm from './AccountForm'

class AccountFormContainer extends React.Component {
  state = {
    uid: null,
    email: '',
    name: '',
    phoneNumber: '',
    accountBank: '',
    accountType: '',
    accountAgency: '',
    accountNumber: '',
    documentNumber: '',
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
        phoneNumber: userInfo.phone.number,
      });

      recipienGet(userInfo.recipient.id).then((recipientInfo) => {
        const bankAccount = recipientInfo.bank_account;
        const accountBank = bankAccount.bank_code;
        const accountType = bankAccount.type;
        const accountAgency = `${bankAccount.agencia}${bankAccount.agencia_dv ? '-' + bankAccount.agencia_dv : ''}`;
        const accountNumber = `${bankAccount.conta}${bankAccount.conta_dv ? '-' + bankAccount.conta_dv : ''}`;
        const documentNumber = bankAccount.document_number;

        this.setState({
          accountBank,
          accountType,
          accountAgency,
          accountNumber,
          documentNumber,
          isLoading: false,
        });
      })
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
      phone: {
        number: phoneNumber
      },
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
      name,
      phoneNumber,
      accountBank,
      accountType,
      accountAgency,
      accountNumber,
      documentNumber,
      errorMsg,
      successMsg,
      isLoading,
      isSubmiting,
    } = this.state

    return (
      <AccountForm
        email={email}
        name={name}
        phoneNumber={phoneNumber}
        accountBank={accountBank}
        accountType={accountType}
        accountAgency={accountAgency}
        accountNumber={accountNumber}
        documentNumber={documentNumber}
        errorMsg={errorMsg}
        successMsg={successMsg}
        isLoading={isLoading}
        isSubmiting={isSubmiting}
        onValueChange={this.valueChange.bind(this)}
        onSubmit={this.handleSubmit.bind(this)}
      />
    );
  }
}

export default AccountFormContainer;
