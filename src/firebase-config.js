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
  apiKey: "AIzaSyAPcj09Obg2E76hCJw4dg0XoQgDfjxTsiI",
  authDomain: "chat-app-3636c.firebaseapp.com",
  projectId: "chat-app-3636c",
  storageBucket: "chat-app-3636c.appspot.com",
  messagingSenderId: "852221013359",
  appId: "1:852221013359:web:1c7ba6c05fa16d1d990c9a",
  measurementId: "G-4VDEMCWY01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
const analytics = getAnalytics(app);