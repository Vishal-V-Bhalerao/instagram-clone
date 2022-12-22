import { initializeApp } from 'firebase/app';
import { FieldValue } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAIZo0Frp0m2MPSFeJw1eXC5-4GDiQ6364',
  authDomain: 'instagram-clone-a8c4c.firebaseapp.com',
  projectId: 'instagram-clone-a8c4c',
  storageBucket: 'instagram-clone-a8c4c.appspot.com',
  messagingSenderId: '286847329279',
  appId: '1:286847329279:web:9cbf986910bdbae2b4bdca',
  measurementId: 'G-KQNDGR9EBK',
};

// Initialize Firebase
// const analytics = getAnalytics(app);

const firebase = initializeApp(firebaseConfig);
export { firebase, FieldValue };
