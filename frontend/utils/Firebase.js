import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "logindoshopai.firebaseapp.com",
  projectId: "logindoshopai",
  storageBucket: "logindoshopai.firebasestorage.app",
  messagingSenderId: "905506546279",
  appId: "1:905506546279:web:bfad24f74d341dda89eac2"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

