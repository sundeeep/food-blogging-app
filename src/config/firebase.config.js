import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCrdZNyo7_rikaeb_YLRWTXubiD4kZD5zo",
  authDomain: "pwskills-hackathon-2.firebaseapp.com",
  projectId: "pwskills-hackathon-2",
  storageBucket: "pwskills-hackathon-2.appspot.com",
  messagingSenderId: "492936661251",
  appId: "1:492936661251:web:fa0491e539adad4596c136",
  measurementId: "G-LVP9KH8BZ3",
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
