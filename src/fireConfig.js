// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBLGCFjscgy96DY8sUqV1F2PjR0AAbJoSg",
  authDomain: "parfum-shop-9a99a.firebaseapp.com",
  projectId: "parfum-shop-9a99a",
  storageBucket: "parfum-shop-9a99a.appspot.com",
  messagingSenderId: "750520090573",
  appId: "1:750520090573:web:058b4b3771cdcf637b4e84",
  measurementId: "G-JT3EJ613LM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firedb=getFirestore(app);
export default firedb;