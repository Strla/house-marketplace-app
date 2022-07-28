// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlxLEDxMueFqZU_OKmGlJ6kupJmMSc8nk",
  authDomain: "house-marketplace-app-6795f.firebaseapp.com",
  projectId: "house-marketplace-app-6795f",
  storageBucket: "house-marketplace-app-6795f.appspot.com",
  messagingSenderId: "752578078987",
  appId: "1:752578078987:web:bd577aec222c349163da0e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
