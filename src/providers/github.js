import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.js";

const githubProvider = new GithubAuthProvider();

const authWithGithub = async () => {
  const result = await signInWithPopup(auth, githubProvider);
  return result.user;
};

export default authWithGithub;
