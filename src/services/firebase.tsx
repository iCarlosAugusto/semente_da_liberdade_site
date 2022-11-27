// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPT33E0AY7dl8XgQ_7l_GAjXdIljsWXvQ",
  authDomain: "semente-teste.firebaseapp.com",
  projectId: "semente-teste",
  storageBucket: "semente-teste.appspot.com",
  messagingSenderId: "950369580986",
  appId: "1:950369580986:web:1a0975556559f25fffcf83",
  measurementId: "G-TJL9CLR9VR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);