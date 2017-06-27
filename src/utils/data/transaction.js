import { client as pagarmeClient } from 'pagarme'
import { get as userGet } from './user'

const pagarmeSettings = { api_key: process.env.REACT_APP_PAGARME_KEY }

export function create (transactionInfo) {
  const {
    sellerId,
    amount,
    cardName,
    cardExpirationDate,
    cardNumber,
    cardCvv,
    metadata
  } = transactionInfo

  const cNumber = cardNumber.replace(/[^0-9]/g, '')
  const cExpirationDate = cardExpirationDate.replace(/[^0-9]/g, '')
  const cvv = cardCvv.replace(/[^0-9]/g, '')

  return userGet().then((userInfo) => {
    return userGet(sellerId).then((sellerInfo) => {
      const transactionData = {
        amount: amount,
        payment_method: 'credit_card',
        installments: 1,
        soft_descriptor: 'WLX Brasil',
        card_number: cNumber,
        card_holder_name: cardName,
        card_expiration_date: cExpirationDate,
        card_cvv: cvv,
        customer: {
          name: userInfo.name,
          email: userInfo.email,
          document_number: userInfo.documentNumber,
          address: {
            street: userInfo.address.street,
            street_number: userInfo.address.number,
            neighborhood: userInfo.address.neighborhood,
            zipcode: userInfo.address.zipcode
          },
          phone: {
            ddi: '55',
            ddd: '43',
            number: userInfo.phone.number
          }
        },
        metadata: metadata,
        split_rules: [
          {
            // socio 01
            recipient_id: "re_cj4fgbp6s02f1a26duh7pb83x",
            percentage: 25,
            liable: true,
            charge_processing_fee: true
          },
          {
            // socio 02
            recipient_id: "re_cj4fgh59q02dj7n6egg2rxcyh",
            percentage: 15,
            liable: true,
            charge_processing_fee: true
          },
          {
            // seller
            recipient_id: sellerInfo.recipient.id,
            percentage: 60,
            liable: true,
            charge_processing_fee: true
          }
        ]
      }

      return pagarmeClient.connect(pagarmeSettings)
        .then(client => client.transactions.create(transactionData))
        .then(transaction => transaction)
        .catch(() => {
          throw new Error('Dados de pagamento inválidos, favor verificar')
        })
    })

  })
}
