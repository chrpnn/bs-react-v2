// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDnPVTz3zwbZ1F_VAnHiNv4ttoWWjIGBNs",
    authDomain: "boardgame-react.firebaseapp.com",
    projectId: "boardgame-react",
    storageBucket: "boardgame-react.appspot.com",
    messagingSenderId: "935364664380",
    appId: "1:935364664380:web:d74968a0e7f2fa48bd7739",
    measurementId: "G-ZBTZLRDJN3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);