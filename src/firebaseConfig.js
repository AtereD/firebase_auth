// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyDB5YAo92lv9NfbqM41b_rOcg0D9UZ-L-I",
  authDomain: "react-firebase-auth-ffdc7.firebaseapp.com",
  projectId: "react-firebase-auth-ffdc7",
  storageBucket: "react-firebase-auth-ffdc7.appspot.com",
  messagingSenderId: "337448979432",
  appId: "1:337448979432:web:ebae2929ac683c6cbf325d"
};


const app = firebase.initializeApp(firebaseConfig);
export default app