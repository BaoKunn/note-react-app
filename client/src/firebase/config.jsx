// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN0D583pWiGcfYfY1YsVT_8jAERFn3-dU",
  authDomain: "note-react-app-da62c.firebaseapp.com",
  projectId: "note-react-app-da62c",
  storageBucket: "note-react-app-da62c.appspot.com",
  messagingSenderId: "199819615460",
  appId: "1:199819615460:web:4a5548b649e8b5fef4e0f1",
  measurementId: "G-Z77PR38J6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);