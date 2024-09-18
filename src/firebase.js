
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYDMlg1WOP45j05XZmt7LqO8lk6uPEB94",
  authDomain: "luvelicious-bebcd.firebaseapp.com",
  projectId: "luvelicious-bebcd",
  storageBucket: "luvelicious-bebcd.appspot.com",
  messagingSenderId: "352533084205",
  appId: "1:352533084205:web:fc9b78090d1e8e9da7e0a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const icecreamCollection = collection(db,"items")