// Initialize Firebase
import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCUDy_lOD5PacKnArefjiYtK8xDqe-eYbI",
    authDomain: "worldcup2018-17eb2.firebaseapp.com",
    databaseURL: "https://worldcup2018-17eb2.firebaseio.com",
    projectId: "worldcup2018-17eb2",
    storageBucket: "",
    messagingSenderId: "1046758893797"
  };

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// Export firebase database
export default firebaseApp.firestore()