
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD6oy1KQVOUyiBbMNmqRT4A-ncDkJaKJjg",
  authDomain: "contact-f2590.firebaseapp.com",
  projectId: "contact-f2590",
  storageBucket: "contact-f2590.firebasestorage.app",
  messagingSenderId: "1083700795270",
  appId: "1:1083700795270:web:12da1117e57b2c781d7e07"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);