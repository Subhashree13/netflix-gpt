// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIxWoIlrNs9VlGYB168rhdENydvS6SZvg",
  authDomain: "netflix-gpt-da785.firebaseapp.com",
  projectId: "netflix-gpt-da785",
  storageBucket: "netflix-gpt-da785.firebasestorage.app",
  messagingSenderId: "732257278056",
  appId: "1:732257278056:web:1b1974e5fa6ffbeb6d83dd",
  measurementId: "G-7V6JDMCZKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();