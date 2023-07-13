// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFnT71BXRcNOJFebFmt-sJ8svalH1ERWk",
  authDomain: "chef-recipe-hunter-169b4.firebaseapp.com",
  projectId: "chef-recipe-hunter-169b4",
  storageBucket: "chef-recipe-hunter-169b4.appspot.com",
  messagingSenderId: "266058541363",
  appId: "1:266058541363:web:b97b92b1288598759cf646"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;