// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAblM0UQhOHznLux3KAXVmEo_RFwLtQ1Zo",
  authDomain: "apple-kingdom-4481d.firebaseapp.com",
  projectId: "apple-kingdom-4481d",
  storageBucket: "apple-kingdom-4481d.firebasestorage.app",
  messagingSenderId: "873651005178",
  appId: "1:873651005178:web:386f04207cef6bbceb4b43"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);