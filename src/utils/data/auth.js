import { auth as firebaseAuth } from 'firebase'
import { create as userCreate } from './user'

export function auth ({email, password, phoneNumber, name}) {
  return firebaseAuth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      userCreate({
        email: user.email,
        uid: user.uid,
        phoneNumber,
        name,
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
