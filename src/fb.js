import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD9I3jrPv1CcLpTl9_r3mwwR04kf_my6g4",
    authDomain: "vuetify-todoninja.firebaseapp.com",
    databaseURL: "https://vuetify-todoninja.firebaseio.com",
    projectId: "vuetify-todoninja",
    storageBucket: "vuetify-todoninja.appspot.com",
    messagingSenderId: "1024447111648"
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots: true });

  export default db;