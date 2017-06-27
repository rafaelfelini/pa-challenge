import { auth as firebaseAuth } from 'firebase'
import { create as userCreate } from './user'
import { create as recipientsCreate } from './recipients'

export function auth (userData) {
  return recipientsCreate(userData).then((recipient) => {
    return firebaseAuth()
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then((user) => {
        userCreate({
          email: user.email,
          uid: user.uid,
          phoneNumber: userData.phoneNumber,
          name: userData.name,
          recipient: {
            id: recipient.id,
            bankAccount: {
              id: recipient.bank_account.id
            }
          },
        })
      })
  })
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, password) {
  return firebaseAuth().signInWithEmailAndPassword(email, password)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}
