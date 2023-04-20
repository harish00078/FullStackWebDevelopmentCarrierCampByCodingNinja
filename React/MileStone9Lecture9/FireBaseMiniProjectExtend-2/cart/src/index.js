import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// here we are importing the (firebase):
import firebase from 'firebase/app';

// we also have to import the (firestore) module of the (firebase):
// because we are using the (firestore) as our (database):
import 'firebase/firestore';


// here we add our (firebase) database configuration:
// because this is our main file:which directly connects with the (DOM):

// Your web app's Firebase configuration:

const firebaseConfig = {
  apiKey: "AIzaSyAtOCpK4pmp4D4hhYzMJ94puJcttu1i3JM",
  authDomain: "cart-b4392.firebaseapp.com",
  projectId: "cart-b4392",
  storageBucket: "cart-b4392.appspot.com",
  messagingSenderId: "209552220210",
  appId: "1:209552220210:web:8ac898c342ef2b98525c2b"
};

// here we are Initializing the  Firebase with our application:
// with the help of its (initializeApp) function:
firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById('root'));


