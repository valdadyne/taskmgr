import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBPKCxHNpkR2pwKcAwh-gVIgL29NiXggIc",
  authDomain: "wholelife-674bc.firebaseapp.com",
  databaseURL: "https://wholelife-674bc.firebaseio.com",
  projectId: "wholelife-674bc",
  storageBucket: "wholelife-674bc.appspot.com",
  messagingSenderId: "543030107948"
};

export const firebaseApp = firebase.initializeApp(config);
export const taskRef = firebase.database().ref('tasks');
