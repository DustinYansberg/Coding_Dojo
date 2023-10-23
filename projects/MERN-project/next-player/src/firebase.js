// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVCZ8e03WIrIl-7QqOyKHmQgan3nFv6_M",
  authDomain: "nextplayer-31fa4.firebaseapp.com",
  projectId: "nextplayer-31fa4",
  storageBucket: "nextplayer-31fa4.appspot.com",
  messagingSenderId: "285690304694",
  appId: "1:285690304694:web:9eaaea30ef85357ad4ae17",
  measurementId: "G-DL1NCN047T",
};
// Initialize Firebase
export const servers = {
  iceServers: [
    {
      urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
    },
  ],
  iceCandidatePoolSize: 10,
};

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
