import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDBhNoi8OG7kGv4_Hk8BS2pUDivJyx8IhE",
  authDomain: "paradoxall-photos.firebaseapp.com",
  projectId: "paradoxall-photos",
  storageBucket: "paradoxall-photos.appspot.com",
  messagingSenderId: "1047653280378",
  appId: "1:1047653280378:web:5f52424e3f15c90bfc29c3"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage };