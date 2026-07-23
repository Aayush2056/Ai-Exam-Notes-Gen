// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-exam-notes-dca78.firebaseapp.com",
  projectId: "ai-exam-notes-dca78",
  storageBucket: "ai-exam-notes-dca78.firebasestorage.app",
  messagingSenderId: "8241396406",
  appId: "1:8241396406:web:13b1366832abf845eec417"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
const provider = new GoogleAuthProvider();

// provider.setCustomParameters({
//   prompt: "select_account",
// });

export {auth ,provider};