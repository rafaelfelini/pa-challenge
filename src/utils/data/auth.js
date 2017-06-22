import { auth as firebaseAuth, database as firebaseDatabase } from 'firebase'

export function auth ({email, password, phoneNumber, name}) {
  return firebaseAuth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      saveUser({
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

export function saveUser (userInfo) {
  return firebaseDatabase()
    .ref()
    .child(`users/${userInfo.uid}/info`)
    .set(userInfo)
    .then(() => userInfo)
}
