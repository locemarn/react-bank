import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBXEBd40Aet_HXsopOpcdO382MLfaYOURY",
  authDomain: "react-bank-db599.firebaseapp.com",
  databaseURL: "https://react-bank-db599.firebaseio.com",
  projectId: "react-bank-db599",
  storageBucket: "react-bank-db599.appspot.com",
  messagingSenderId: "627288169804"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebaseImpl.database()
