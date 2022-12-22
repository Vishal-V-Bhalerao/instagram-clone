import { initializeApp } from 'firebase/app';
import { FieldValue } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import 'firebase/auth';
// import { seedDatabase } from '../seed';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase

const firebaseConfig = {
  apiKey: 'AIzaSyAIZo0Frp0m2MPSFeJw1eXC5-4GDiQ6364',
  authDomain: 'instagram-clone-a8c4c.firebaseapp.com',
  projectId: 'instagram-clone-a8c4c',
  storageBucket: 'instagram-clone-a8c4c.appspot.com',
  messagingSenderId: '286847329279',
  appId: '1:286847329279:web:9cbf986910bdbae2b4bdca',
  measurementId: 'G-KQNDGR9EBK',
};

const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
const db = getFirestore(firebase)

// only meant to run once to add test data in firebase collection
// console.log(db)
// seedDatabase(db)

export { firebase, db, FieldValue, analytics };
