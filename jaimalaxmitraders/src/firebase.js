// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import {initializeApp} from "firebase/app";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDKM_RsvKl7nhnO1FkV8l03G5qNsIcOTEA",
  authDomain: "jaimalaxmitraders-ddd14.firebaseapp.com",
  projectId: "jaimalaxmitraders-ddd14",
  storageBucket: "jaimalaxmitraders-ddd14.appspot.com",
  messagingSenderId: "158915794527",
  appId: "1:158915794527:web:8a0d7809ef6cc8df192dea",
  measurementId: "G-CZYZMZQB42"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };