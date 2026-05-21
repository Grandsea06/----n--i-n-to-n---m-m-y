import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCuYC5vdYhK-thd0MWlc56-hdxz-eKZuXM",
  authDomain: "doandtdm-20eb1.firebaseapp.com",
  projectId: "doandtdm-20eb1",
  storageBucket: "doandtdm-20eb1.firebasestorage.app",
  messagingSenderId: "225278947264",
  appId: "1:225278947264:web:10de7e726baf519babe225",
  measurementId: "G-ZS8R0TXHT7"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
  db,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
};