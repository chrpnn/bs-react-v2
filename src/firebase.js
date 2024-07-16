// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



//delite later
import { getFirestore } from "firebase/firestore";
// import { collection, addDoc, storage } from "firebase/firestore"; 


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnPVTz3zwbZ1F_VAnHiNv4ttoWWjIGBNs",
    authDomain: "boardgame-react.firebaseapp.com",
    projectId: "boardgame-react",
    storageBucket: "boardgame-react.appspot.com",
    messagingSenderId: "935364664380",
    appId: "1:935364664380:web:d74968a0e7f2fa48bd7739",
    measurementId: "G-ZBTZLRDJN3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);


// del later
export const db = getFirestore(app);