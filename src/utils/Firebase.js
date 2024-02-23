// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD03kluY8Rq19J5H3EvJNiV37Vtq2-OLcE",
  authDomain: "netflix-gpt-a6aad.firebaseapp.com",
  projectId: "netflix-gpt-a6aad",
  storageBucket: "netflix-gpt-a6aad.appspot.com",
  messagingSenderId: "503036224975",
  appId: "1:503036224975:web:8304abcf7b5dc60b2bdeba",
  measurementId: "G-LYFZWV52PM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
