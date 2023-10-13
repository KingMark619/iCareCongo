import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import 'firebase/auth'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBEfWyjt-_1ySclgWo-RXFp4rNITi30dJ8",
    authDomain: "icare-congo.firebaseapp.com",
    projectId: "icare-congo",
    storageBucket: "icare-congo.appspot.com",
    messagingSenderId: "87638005087",
    appId: "1:87638005087:web:0fca93669508f5c389d2ea",
    measurementId: "G-9QGVXP1MBC"
};

// initialize firebase 
export const app = initializeApp(firebaseConfig,"Congo Sante")
// initialize firestore
export const db = getFirestore(app)

export const initFirebase = () => {
  return app
}
export const initFirestore = () => {
  return db
}