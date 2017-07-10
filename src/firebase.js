import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyD6RQTKmB2IhsYnU7rQs8QKVCMukma2V1w",
    authDomain: "wholelife-c9db5.firebaseapp.com",
    databaseURL: "https://wholelife-c9db5.firebaseio.com",
    projectId: "wholelife-c9db5",
    storageBucket: "wholelife-c9db5.appspot.com",
    messagingSenderId: "1052983635963"
  };
  firebase.initializeApp(config);
  export default firebase;