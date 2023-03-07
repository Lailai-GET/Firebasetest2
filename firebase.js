// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
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
// testRead();
async function testUpload() {
  try {
    const docRef = await addDoc(collection(db, "test8"), {
      calledFrom: "funker det om jeg har query snapshot?",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function testRead() {
  const docRef = doc(db, "test", "highscores");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    model.test=docSnap.data();
    console.log("docSnap",docSnap.data(), "model", model.test)
    updateView();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

async function testSet() {
  await setDoc(doc(db, "test", "highscores"), model.highscores);
}

export { testUpload, testRead, testSet };
