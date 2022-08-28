// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {connectAuthEmulator, getAuth} from "firebase/auth";
import { connect } from "react-redux";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp =initializeApp( {
  apiKey: "AIzaSyDXGeey9j1JLte1hLPippvkBb14HyfIoBM",
  authDomain: "netflix-clone-tamil.firebaseapp.com",
  databaseURL: "https://netflix-clone-tamil-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflix-clone-tamil",
  storageBucket: "netflix-clone-tamil.appspot.com",
  messagingSenderId: "283741118752",
  appId: "1:283741118752:web:4440ae4d1bb5fe1cc9f745"
});

// Initialize Firebase


const auth =getAuth(firebaseApp);
export default auth;