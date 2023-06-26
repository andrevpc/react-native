// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4wrRON26-5Rcar3_VNZEu-eVDoONLFns",
  authDomain: "react-native-37f1d.firebaseapp.com",
  projectId: "react-native-37f1d",
  storageBucket: "react-native-37f1d.appspot.com",
  messagingSenderId: "631288630631",
  appId: "1:631288630631:web:a0b3b83a0f6ce3e2baf3c2",
  measurementId: "G-4SH73MY4CD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;