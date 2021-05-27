import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyC1cDhopvNmEJxmA4NFRt-2HGkkdYzQyPw",
    authDomain: "storyhub-22b2a.firebaseapp.com",
    databaseURL: "https://storyhub-22b2a-default-rtdb.firebaseio.com",
    projectId: "storyhub-22b2a",
    storageBucket: "storyhub-22b2a.appspot.com",
    messagingSenderId: "1044338236325",
    appId: "1:1044338236325:web:19f55cb3dc59e56d47264c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 
  export default firebase.firestore()