// Import the functions you need from the SDKs you need
import { initializeApp,getApp, getApps } from "firebase/app";
import {getFirestore}from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD852_g77-05zSxpnDuRFCmHtbGc6_bh-c",
  authDomain: "web-porfolio-5acf5.firebaseapp.com",
  projectId: "web-porfolio-5acf5",
  storageBucket: "web-porfolio-5acf5.appspot.com",
  messagingSenderId: "35959247856",
  appId: "1:35959247856:web:3f6d2cfc8f0a52d4868335"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db};