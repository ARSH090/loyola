

// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
   apiKey: "AIzaSyD92eXsaZAe7fC3LAC7U3qaeqkx0srwwzg",
  authDomain: "loyola-admin.firebaseapp.com",
  projectId: "loyola-admin",
  storageBucket: "loyola-admin.firebasestorage.app",
  messagingSenderId: "499129608565",
  appId: "1:499129608565:web:dce843f75c55699570cb3c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
