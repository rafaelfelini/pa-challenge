import { auth as firebaseAuth, database as firebaseDatabase } from 'firebase'

export function userInfoGet () {
  const user = firebaseAuth().currentUser;

  return firebaseDatabase()
    .ref(`users/${user.uid}`)
    .once('value', (snapshot) => snapshot)
    .then((snapshot) => {
      const userInfo = snapshot.val().info;
      return userInfo
    })
}

export function userInfoUpdate (userInfo) {
  return firebaseDatabase()
    .ref()
    .child(`users/${userInfo.uid}/info`)
    .set(userInfo)
    .then(() => userInfo)
}
