import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.js";

const xTwitterProvider = new TwitterAuthProvider();

const authWithXTwitter = async () => {
  const result = await signInWithPopup(auth, xTwitterProvider);
  return result.user;
};

export default authWithXTwitter;
