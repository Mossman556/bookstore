// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT-7BFN9NxxAY9x-vSwhMphBP6KV6gK7U",
  authDomain: "bookstore-930b9.firebaseapp.com",
  databaseURL: "https://bookstore-930b9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bookstore-930b9",
  storageBucket: "bookstore-930b9.appspot.com",
  messagingSenderId: "719299461102",
  appId: "1:719299461102:web:303918d8b8c5329bc5d8ff",
  measurementId: "G-HREZRQ8T7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);