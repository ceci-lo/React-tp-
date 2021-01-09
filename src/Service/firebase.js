import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAdBhWMKKW83az6jICpJxP2uD60y0r39Mc",
  authDomain: "react-app-488f6.firebaseapp.com",
  databaseURL: "https://react-app-488f6-default-rtdb.firebaseio.com",
  projectId: "react-app-488f6",
  storageBucket: "react-app-488f6.appspot.com",
  messagingSenderId: "354150828502",
  appId: "1:354150828502:web:d2c225c8269260b0233c77",
  measurementId: "G-MKJXTF85M6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firebase.auth = firebase.auth();
firebase.db = db;

export default firebase;
