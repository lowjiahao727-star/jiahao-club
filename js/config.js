// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW6yACAG3rYUGWNsNNAid692fxs293qT0",
  authDomain: "jiahao-club.firebaseapp.com",
  projectId: "jiahao-club",
  storageBucket: "jiahao-club.firebasestorage.app",
  messagingSenderId: "381682966626",
  appId: "1:381682966626:web:b23135b993028fc053f13b",
  measurementId: "G-66NFSML7TV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
