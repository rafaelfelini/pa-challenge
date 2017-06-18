import firebase from 'firebase';

export default function () {
  const config = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: `${process.env.REACT_APP_FIREBASE_APP}.firebaseapp.com`,
    databaseURL: `https://${process.env.REACT_APP_FIREBASE_APP}.firebaseio.com`,
    projectId: process.env.REACT_APP_FIREBASE_ID,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
  };

  firebase.initializeApp(config);
}
