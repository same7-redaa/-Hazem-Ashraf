// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo38qr15XvxfYkEZ1JE5L3Ptd-_NL-kXk",
  authDomain: "hazem-ashraf.firebaseapp.com",
  projectId: "hazem-ashraf",
  storageBucket: "hazem-ashraf.firebasestorage.app",
  messagingSenderId: "300290719771",
  appId: "1:300290719771:web:3e99bb621448dd30a538be",
  measurementId: "G-BEDRFXQ20Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app;