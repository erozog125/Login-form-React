// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKxwmP_Jeb7o0ClXJ0mBBi7ut8Sa2XgXk",
  authDomain: "react-fb-auth-5d52d.firebaseapp.com",
  projectId: "react-fb-auth-5d52d",
  storageBucket: "react-fb-auth-5d52d.appspot.com",
  messagingSenderId: "412427122636",
  appId: "1:412427122636:web:32b5bfc3f4bcbd410c0f69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);