import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6to_3N7WfmE-E5iq367ajytoYEMK1kHA",
  authDomain: "ecommerce-react-coderhou-67a34.firebaseapp.com",
  projectId: "ecommerce-react-coderhou-67a34",
  storageBucket: "ecommerce-react-coderhou-67a34.firebasestorage.app",
  messagingSenderId: "965264767184",
  appId: "1:965264767184:web:c661eb2e2461e96f50c6d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;