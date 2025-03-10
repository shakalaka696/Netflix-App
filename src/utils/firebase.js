// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiHziJShTXZhnv0z8t3MNhPblK2nUa-TE",
  authDomain: "netflixgpt-4d31d.firebaseapp.com",
  projectId: "netflixgpt-4d31d",
  storageBucket: "netflixgpt-4d31d.firebasestorage.app",
  messagingSenderId: "426645177026",
  appId: "1:426645177026:web:9109dd0c94daa3b054715b",
  measurementId: "G-RL8PDD14GJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

