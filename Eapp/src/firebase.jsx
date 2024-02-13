// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv5XF9vV2zIF4At2pCcIGsNWzdvoMxJ60",
  authDomain: "newbase-c75e1.firebaseapp.com",
  projectId: "newbase-c75e1",
  storageBucket: "newbase-c75e1.appspot.com",
  messagingSenderId: "1004847982362",
  appId: "1:1004847982362:web:c78806ce36f81b18212ea3",
  measurementId: "G-GRX6FZ9XLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;