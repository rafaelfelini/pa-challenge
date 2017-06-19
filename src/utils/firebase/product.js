import { auth as firebaseAuth, database as firebaseDatabase } from 'firebase'

export function productCreate (productData) {
  const user = firebaseAuth().currentUser;
  const key = firebaseDatabase().ref().child('products').push().key;

  productData.user = user.uid

  return firebaseDatabase()
    .ref()
    .child(`products/${key}`)
    .set(productData)
    .then(() => ({
      key,
      ...productData
    }))
}
