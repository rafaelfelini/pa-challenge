import { auth as firebaseAuth, database as firebaseDatabase } from 'firebase';

export function create (productData) {
  const user = firebaseAuth().currentUser;
  const key = firebaseDatabase().ref().child('products').push().key;

  productData.user = user.uid;
  productData.createdAt = firebaseDatabase.ServerValue.TIMESTAMP;

  return firebaseDatabase()
    .ref()
    .child(`products/${key}`)
    .set(productData)
    .then(() => ({
      key,
      ...productData
    }));
};

export function getAll (settings) {
  const {
    onChildAdd,
    onChildChanged,
    onChildRemoved,
  } = settings;

  const ref = firebaseDatabase().ref().child('products');

  if (onChildAdd) {
    ref.on('child_added', (snapshot) => {
      onChildAdd(snapshot.key, snapshot.val());
    })
  }

  if (onChildChanged) {
    ref.on('child_changed', (snapshot) => {
      onChildChanged(snapshot.key, snapshot.val());
    })
  }

  if (onChildRemoved) {
    ref.on('child_removed', (snapshot) => {
      onChildRemoved(snapshot.key);
    })
  }

  return ref;
}
