
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  "apiKey": "AIzaSyCgO9knPy6Ez30yL3Ax-iMOVFrUcjQzb-8",
  "authDomain": "apptext-ee43e.firebaseapp.com",
  "projectId": "apptext-ee43e",
  "storageBucket": "apptext-ee43e.appspot.com",
  "messagingSenderId": "1019363607576",
  "appId": "1:1019363607576:web:75f3e7c6bbe5ff25f02f6d",
  "databaseURL": ""
}


const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

