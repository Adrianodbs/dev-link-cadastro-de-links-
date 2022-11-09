import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBH-6qNa7kRTP3pBFm-hJ_RaevYHk8nhUc',
  authDomain: 'devlinks-85352.firebaseapp.com',
  projectId: 'devlinks-85352',
  storageBucket: 'devlinks-85352.appspot.com',
  messagingSenderId: '1002796857961',
  appId: '1:1002796857961:web:cc17a64c06837a707080f8',
  measurementId: 'G-TGP557B3D4'
}

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth }
