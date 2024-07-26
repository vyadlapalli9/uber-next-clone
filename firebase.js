// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpdVhKY3tQU6vP5EVgP-Qrj4QmX5DywpE",
  authDomain: "uber-next-clone-live-8ecd9.firebaseapp.com",
  projectId: "uber-next-clone-live-8ecd9",
  storageBucket: "uber-next-clone-live-8ecd9.appspot.com",
  messagingSenderId: "26165544102",
  appId: "1:26165544102:web:22e5d48c1828b3c533a067"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app,provider,auth}