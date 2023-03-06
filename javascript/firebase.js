// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  setDoc,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOlXGvDo3b3rnjHRhgK4CWKzpz2VwthUo",
  authDomain: "testproject-b131e.firebaseapp.com",
  projectId: "testproject-b131e",
  storageBucket: "testproject-b131e.appspot.com",
  messagingSenderId: "303278852296",
  appId: "1:303278852296:web:e38f0dd7becfcaa81abdfd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// testUpload();
async function testUpload() {
    try {
      const docRef = await addDoc(collection(db, "test4"), {
        calledFrom: "async på scripttag controller"
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
export {testUpload};