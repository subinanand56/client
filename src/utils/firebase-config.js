
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA1RH-qAsjgMlcm4r5u36J0I5XDLc5zH4k",
  authDomain: "netflix-clone-f01fc.firebaseapp.com",
  projectId: "netflix-clone-f01fc",
  storageBucket: "netflix-clone-f01fc.appspot.com",
  messagingSenderId: "244929056635",
  appId: "1:244929056635:web:20e74aae882b9c843e77de",
  measurementId: "G-CHVQV1G0JL"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)