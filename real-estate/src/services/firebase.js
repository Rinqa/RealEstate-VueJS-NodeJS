// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import store from "../store";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdAuubaz0XVHiUDD_4rn6w5eEGFxb9-40",
  authDomain: "real-estate-app-b8d92.firebaseapp.com",
  projectId: "real-estate-app-b8d92",
  storageBucket: "real-estate-app-b8d92.appspot.com",
  messagingSenderId: "142818561893",
  appId: "1:142818561893:web:f01288e4b933e8d4c49b8c",
  measurementId: "G-T8RP5C7RTX"
};

initializeApp(firebaseConfig);

onAuthStateChanged(getAuth(), (user) => {
  store.dispatch("fetchUser", user);
});