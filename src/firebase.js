// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoHZxmJUQdSVtJz7mt5nduynIaMAwIRqI",
  authDomain: "fir-dz-e7609.firebaseapp.com",
  projectId: "fir-dz-e7609",
  storageBucket: "fir-dz-e7609.appspot.com",
  messagingSenderId: "754019898353",
  appId: "1:754019898353:web:6f87f602d63ebe3d232a50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
