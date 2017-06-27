import { database as firebaseDatabase } from 'firebase';
import { getId as userGetId } from './user'

export function create (productData) {
  const userId = userGetId();
  const key = firebaseDatabase().ref().child('products').push().key;

  productData.userId = userId;
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

export function getRealtime (id, settings) {
  const {
    onChildAdd,
    onChildChanged,
    onChildRemoved,
  } = settings;

  const ref = firebaseDatabase().ref().child('products').orderByKey().equalTo(id);

  if (onChildAdd) {
    ref.on('child_added', (snapshot) => {
      onChildAdd(snapshot.val());
    })
  }

  if (onChildChanged) {
    ref.on('child_changed', (snapshot) => {
      onChildChanged(snapshot.val());
    })
  }

  if (onChildRemoved) {
    ref.on('child_removed', (snapshot) => {
      onChildRemoved();
    })
  }

  return ref;
}

export function getAllRealtime (settings) {
  const {
    onChildAdd,
    onChildChanged,
    onChildRemoved,
    onceValue,
  } = settings;

  const ref = firebaseDatabase().ref().child('products');

  if (onceValue) {
    ref.once('value', (snapshot) => {
      onceValue(snapshot.key, snapshot.val());
    })
  }

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
