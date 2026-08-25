import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfVZIuZncoqs70R-tjtb0hSJhbLyCGKLE",
  authDomain: "lifeforge-fc9ef.firebaseapp.com",
  projectId: "lifeforge-fc9ef",
  storageBucket: "lifeforge-fc9ef.firebasestorage.app",
  messagingSenderId: "759619864404",
  appId: "1:759619864404:web:1aad48eef3e4650b67aac1",
  measurementId: "G-4GVDN9E1S1"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
