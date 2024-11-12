import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3cvlYvAwmi97NOMhgy764TlDc7kr7_tw",
  authDomain: "kontakt0.firebaseapp.com",
  projectId: "kontakt0",
  storageBucket: "kontakt0.firebasestorage.app",
  messagingSenderId: "551734671344",
  appId: "1:551734671344:web:b54675427e99c0d7c10f35",
  measurementId: "G-NJSFFV5YWQ",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseStore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { firebaseApp, firebaseStore, auth };
