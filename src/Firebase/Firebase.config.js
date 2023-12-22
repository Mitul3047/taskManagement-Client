// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKA-g-sy2KhYuiu8AK4pvTKcll-SF5Hig",
  authDomain: "taskmanagementauth.firebaseapp.com",
  projectId: "taskmanagementauth",
  storageBucket: "taskmanagementauth.appspot.com",
  messagingSenderId: "846294653657",
  appId: "1:846294653657:web:fc6c3b586e022a89203cc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;