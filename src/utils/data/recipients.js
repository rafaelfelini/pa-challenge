import { client as pagarmeClient } from 'pagarme'

export function create (recipientInfo) {
  const {
    name,
    document,
    accountAgency,
    accountNumber,
    accountBank,
    accountType,
  } = recipientInfo

  const numberSplitted = accountNumber.split('-')
  const number = numberSplitted[0]
  const numberVc = numberSplitted[1]

  return pagarmeClient.connect({ api_key: process.env.REACT_APP_PAGARME_KEY })
    .then(client => client.recipients.create({
      bank_account: {
        agencia: accountAgency,
        bank_code: accountBank,
        bank_type: accountType,
        conta_dv: numberVc,
        conta: number,
        document_number: document,
        legal_name: name
      },
      transfer_interval: 'daily',
      transfer_enabled: true
    }))
    .then((recipient) => recipient)
    .catch(() => {
      throw new Error('Dados bancários inválidos, favor verificar')
    })
}
