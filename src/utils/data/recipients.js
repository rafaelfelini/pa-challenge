import { client as pagarmeClient } from 'pagarme'
import { get as userGet } from './user'

const pagarmeSettings = { api_key: process.env.REACT_APP_PAGARME_KEY }

export function create (recipientInfo) {
  const {
    name,
    documentNumber,
    accountAgency,
    accountNumber,
    accountBank,
    accountType,
  } = recipientInfo

  const numberSplitted = accountNumber.split('-')
  const number = numberSplitted[0]
  const numberVc = numberSplitted[1]

  const recipientData = {
    bank_account: {
      agencia: accountAgency,
      bank_code: accountBank,
      bank_type: accountType,
      conta_dv: numberVc,
      conta: number,
      document_number: documentNumber,
      legal_name: name
    },
    transfer_interval: 'daily',
    transfer_enabled: true
  }

  return pagarmeClient.connect(pagarmeSettings)
    .then(client => client.recipients.create(recipientData))
    .then((recipient) => recipient)
    .catch(() => {
      throw new Error('Dados bancários inválidos, favor verificar')
    })
}

export function get (id) {
  if (!id) {
    return userGet((userInfo) => {
      id = userInfo.recipient.id
      return pagarmeClient.connect(pagarmeSettings)
        .then(client => client.recipients.find({ id }))
        .then(recipient => recipient)
    })
  } else {
    return pagarmeClient.connect(pagarmeSettings)
      .then(client => client.recipients.find({ id }))
      .then(recipient => recipient)
  }
}
