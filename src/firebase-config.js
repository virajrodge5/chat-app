// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider }from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXrzd6LJ-YA2q0Ud6e13gRuFZEeeaNbag",
  authDomain: "chat-app-1d51b.firebaseapp.com",
  projectId: "chat-app-1d51b",
  storageBucket: "chat-app-1d51b.appspot.com",
  messagingSenderId: "206403549945",
  appId: "1:206403549945:web:9a0318c2568abefa920028",
  measurementId: "G-P5N0RNM2X5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
const analytics = getAnalytics(app);