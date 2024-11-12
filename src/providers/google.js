import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.js";

const googleProvider = new GoogleAuthProvider();

const authWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};

export default authWithGoogle;
