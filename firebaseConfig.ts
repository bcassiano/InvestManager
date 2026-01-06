import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAS7zz-z6YZfUCqs-3C-9VUvld-loiL60",
  authDomain: "app-investmanager.firebaseapp.com",
  projectId: "app-investmanager",
  storageBucket: "app-investmanager.firebasestorage.app",
  messagingSenderId: "790846401352",
  appId: "1:790846401352:web:e8be04d82f49426db4a17d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
