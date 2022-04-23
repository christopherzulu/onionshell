// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY9lmghPAyZh7J2x7_-R23W9v90244Yas",
  authDomain: "chat-community-for-oniontable.firebaseapp.com",
  projectId: "chat-community-for-oniontable",
  storageBucket: "chat-community-for-oniontable.appspot.com",
  messagingSenderId: "426991638612",
  appId: "1:426991638612:web:bc5e034c0cc0b62e7075c1",
  measurementId: "G-0R53YGKCBK"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
