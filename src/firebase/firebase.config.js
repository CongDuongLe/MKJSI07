
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAzGDNSXFbeHOfrz9tAx_yJtqfcZqwNOeo",
  authDomain: "learn-firebase-dd560.firebaseapp.com",
  projectId: "learn-firebase-dd560",
  storageBucket: "learn-firebase-dd560.appspot.com",
  messagingSenderId: "265267629289",
  appId: "1:265267629289:web:a4c9671607d6e8f4faf478"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// setting up firestore database

export const db = getFirestore(app);