import { auth as firebaseAuth, database as firebaseDatabase } from 'firebase'

export function getId () {
  return firebaseAuth().currentUser.uid
}

export function get (uid = getId()) {
  return firebaseDatabase()
    .ref(`users/${uid}`)
    .once('value', (snapshot) => snapshot)
    .then((snapshot) => {
      const userInfo = snapshot.val().info;
      return userInfo
    })
}

export function getAll () {
  return firebaseDatabase()
    .ref('users')
    .once('value', (snapshot) => snapshot)
    .then((snapshot) => {
      const userInfo = snapshot.val().info;
      return userInfo
    })
}

export function update (userInfo) {
  return firebaseDatabase()
    .ref()
    .child(`users/${userInfo.uid}/info`)
    .set(userInfo)
    .then(() => userInfo)
}

export function create (userInfo) {
  return firebaseDatabase()
    .ref()
    .child(`users/${userInfo.uid}/info`)
    .set(userInfo)
    .then(() => userInfo)
}
