import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAogvUi0Jv5rQsMON3Lj_B8Ese1GbdMiq0",
  authDomain: "neetflix-dd7a3.firebaseapp.com",
  projectId: "neetflix-dd7a3",
  storageBucket: "neetflix-dd7a3.firebasestorage.app",
  messagingSenderId: "746613486378",
  appId: "1:746613486378:web:2ccf66597c69225329a453",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const singup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      displayName: name,
      authProvider: "local",
      email: user.email,
    });
    await updateProfile(user, { displayName: name });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

export { auth, db, singup, login, logout };
