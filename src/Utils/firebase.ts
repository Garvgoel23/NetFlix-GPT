// Import the functions you need from the SDKs you need
/*import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";*/

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
  apiKey: "AIzaSyDo4g89MJ9U_T-SNFv63S_FQCITTdso1Xo",
  authDomain: "netflixgpt-2cc74.firebaseapp.com",
  projectId: "netflixgpt-2cc74",
  storageBucket: "netflixgpt-2cc74.firebasestorage.app",
  messagingSenderId: "706852429880",
  appId: "1:706852429880:web:b0c767f2ef7c11a8db46cd",
  measurementId: "G-DVFKLH8FG4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
*/
// src/Utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDo4g89MJ9U_T-SNFv63S_FQCITTdso1Xo",
  authDomain: "netflixgpt-2cc74.firebaseapp.com",
  projectId: "netflixgpt-2cc74",
  storageBucket: "netflixgpt-2cc74.firebasestorage.app",
  messagingSenderId: "706852429880",
  appId: "1:706852429880:web:b0c767f2ef7c11a8db46cd",
  measurementId: "G-DVFKLH8FG4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// FIX: Just call the function without assigning it to a variable,
// or remove these two lines entirely if you don't need analytics.
getAnalytics(app);

export const auth = getAuth();
