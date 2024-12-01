import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbGyPsq32ts_nbAxk4KzNxrMoVavwhQIc",
    authDomain: "shuttl-14825.firebaseapp.com",
    projectId: "shuttl-14825",
    storageBucket: "shuttl-14825.appspot.com",
    messagingSenderId: "1022618266917",
    appId: "1:1022618266917:web:fcbc83f25700776031fecc",
    measurementId: "G-DYDM16B1W4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)