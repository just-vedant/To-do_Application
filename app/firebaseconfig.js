import { initializeApp} from "firebase/app";

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDX8MLmc5-bJXoVlXEWkfEMeIJS3azzLG8",
  authDomain: "todolist-84fff.firebaseapp.com",
  projectId: "todolist-84fff",
  storageBucket: "todolist-84fff.firebasestorage.app",
  messagingSenderId: "107647117677",
  appId: "1:107647117677:web:c29f6d4bf2b5976a935264",
  measurementId: "G-DYQXXC9QZ7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

