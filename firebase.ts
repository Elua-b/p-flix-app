import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBojBxJiVSrQGlXyLwsB56kkMtqmnLYTJk",
  authDomain: "p-flix-2fa53.firebaseapp.com",
  projectId: "p-flix-2fa53",
  storageBucket: "p-flix-2fa53.appspot.com",
  messagingSenderId: "760794754887",
  appId: "1:760794754887:web:cac6c1acbc05a699532662",
  measurementId: "G-CKWEZ843C7"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }