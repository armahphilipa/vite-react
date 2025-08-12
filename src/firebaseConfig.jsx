// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZzJZ5iUQNf-jErzaSj-VNNdLBOTwRroY",
  authDomain: "tumus-7b896.firebaseapp.com",
  projectId: "tumus-7b896",
  storageBucket: "tumus-7b896.firebasestorage.app",
  messagingSenderId: "593458625205",
  appId: "1:593458625205:web:cc6774acf8684fdcc6dcfc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
