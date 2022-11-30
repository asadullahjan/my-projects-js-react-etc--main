import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGAu_I7MIkaxtSjX8YVZZLTGejDCJc9ow",
  authDomain: "crwn-clothing-db-68db3.firebaseapp.com",
  projectId: "crwn-clothing-db-68db3",
  storageBucket: "crwn-clothing-db-68db3.appspot.com",
  messagingSenderId: "946343513697",
  appId: "1:946343513697:web:698b73e9383a93f08a2420",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
  
}