import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFI_X0i5KgBbMNPgzuB3KZbwMQrvVJ7LA",
  authDomain: "resume-builder-app-fe392.firebaseapp.com",
  projectId: "resume-builder-app-fe392",
  storageBucket: "resume-builder-app-fe392.firebasestorage.app",
  messagingSenderId: "3975510703",
  appId: "1:3975510703:web:9a25859f332f9291f3725a",
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
