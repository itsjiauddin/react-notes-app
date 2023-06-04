// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2KZC9wirSjDBbPYZyG32G7NNm7bSvaAw",
  authDomain: "jia-uddin-b359f.firebaseapp.com",
  projectId: "jia-uddin-b359f",
  storageBucket: "jia-uddin-b359f.appspot.com",
  messagingSenderId: "203868832708",
  appId: "1:203868832708:web:7f51b8bdbb3bca22d31a91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
