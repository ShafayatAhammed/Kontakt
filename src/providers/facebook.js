import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.js";

const facebookProvider = new FacebookAuthProvider();

const authWithFacebook = async () => {
  const result = await signInWithPopup(auth, facebookProvider);
  return result.user;
};

export default authWithFacebook;
