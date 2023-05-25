// here we are putting the configuration of our application's database:

// here we are using the (fireStore) database of (firebase):


// here we are importing the (firebase):
import firebase from 'firebase/app';

// we also have to import the (firestore) module of the (firebase):
// because we are using the (firestore) as our (database):
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCIOLcHTHlQc11bLBlhIa2_Eh7zDl9mjPM",
  authDomain: "react-hooks-blog-bdbda.firebaseapp.com",
  projectId: "react-hooks-blog-bdbda",
  storageBucket: "react-hooks-blog-bdbda.appspot.com",
  messagingSenderId: "820726107588",
  appId: "1:820726107588:web:0c9c2f0b50791255ef2891"
};



// here we are initializing our database with our (App):
// for initializing the database with our (App):we need to use the (initializeApp) function of our (firebase) database:
firebase.initializeApp(firebaseConfig);



// after setting up the firebase database:In the file we need to export it:
// so that our (application) can use the (database): through this (database) configuration file:
// we need to export the two things from this (file):
// => first is (firebase) itself:
// => and second is (firestore) under the (firebase):

// we will store these both in the (variable):and then (export) that variable:
export const firestore = firebase.firestore();