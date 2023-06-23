// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {  // Your web app's Firebase configuration
  apiKey: "AIzaSyC5AKHhKEFV23CFgSx9OakQ1FxAk3L5F5c",
  authDomain: "reactjs-course-pt-yt.firebaseapp.com",
  projectId: "reactjs-course-pt-yt",
  storageBucket: "reactjs-course-pt-yt.appspot.com",
  messagingSenderId: "746613040533",
  appId: "1:746613040533:web:f97223a1f26f8d2bc9c29c"
};

const app = initializeApp(firebaseConfig);  // Initialize Firebase

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
