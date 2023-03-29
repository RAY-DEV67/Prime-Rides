import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import {getFirestore} from "firebase/firestore"

// NEW CONFIG ////////////////////////////

import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/storage"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyDwd_lCJz7oUcyGPxE779Bz_axHxiQQvTY",
    authDomain: "optcars-e42e2.firebaseapp.com",
    projectId: "optcars-e42e2",
    storageBucket: "optcars-e42e2.appspot.com",
    messagingSenderId: "399220309337",
    appId: "1:399220309337:web:88552acfaf0a875cc7a048",
    measurementId: "G-QKFGT0J9DW"
  });

// Initialize Firebase
const app = firebaseApp;

const db = firebaseApp.firestore()

// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export const db = getFirestore(app)
export const storage = firebase.storage()
export default db


