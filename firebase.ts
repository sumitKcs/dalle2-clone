import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBj7k_-EbuIv4B8HhOPC9pcwMx43MZYvb4",
    authDomain: "dalle-clone-19672.firebaseapp.com",
    projectId: "dalle-clone-19672",
    storageBucket: "dalle-clone-19672.appspot.com",
    messagingSenderId: "798080202619",
    appId: "1:798080202619:web:92398f0640b85faa882fde"
  };

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db};