

import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAE1g0Sm0-75NMde-OS5vup55KfV58jWMc",
  authDomain: "rentkaro-81735.firebaseapp.com",
  projectId: "rentkaro-81735",
  storageBucket: "rentkaro-81735.appspot.com",
  messagingSenderId: "218147494658",
  appId: "1:218147494658:web:19464bc7d033435a48001b",
  measurementId: "G-DL5HTS9EZ6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// console.log(provider,"autt")
export {auth,provider};




