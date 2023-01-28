
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8TUyV2O7TL1KpwOgN5F6yqzUtDWSi1RA",
  authDomain: "react-netflix-e64a5.firebaseapp.com",
  projectId: "react-netflix-e64a5",
  storageBucket: "react-netflix-e64a5.appspot.com",
  messagingSenderId: "899503911459",
  appId: "1:899503911459:web:466a2afe3c3c94adac3796",
  measurementId: "G-REE25TFW9T"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);