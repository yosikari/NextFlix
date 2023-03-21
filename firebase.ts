// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBigYW7J4CoiG_4d_tqJSd3Orc6HmozSro",
    authDomain: "nextflix-yosikari.firebaseapp.com",
    projectId: "nextflix-yosikari",
    storageBucket: "nextflix-yosikari.appspot.com",
    messagingSenderId: "791107676659",
    appId: "1:791107676659:web:9d708016d9b8a337844a86"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }