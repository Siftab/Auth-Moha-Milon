// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import{ getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3VH7NiiACoHaQFa2ha7HYsTHzp9NwcPQ",
  authDomain: "auth-moha-milon-8dff5.firebaseapp.com",
  projectId: "auth-moha-milon-8dff5",
  storageBucket: "auth-moha-milon-8dff5.appspot.com",
  messagingSenderId: "600334275110",
  appId: "1:600334275110:web:bf07d471bb3abf78d60ce7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;