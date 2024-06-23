// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXsBsKb9XiMQe6QyRxclmaLZGgi4Jdi80",
  authDomain: "netflix-gpt-882f3.firebaseapp.com",
  projectId: "netflix-gpt-882f3",
  storageBucket: "netflix-gpt-882f3.appspot.com",
  messagingSenderId: "309513016126",
  appId: "1:309513016126:web:ac2ded2fe74ef365e2126f",
  measurementId: "G-BB6MMT32ZC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
