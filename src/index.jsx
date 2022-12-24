import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import fireBaseContext from './context/firebase';
import { firebase, db, FieldValue, analytics,  getAuth, createUserWithEmailAndPassword } from './lib/firebase';
import './styles/app.css'
// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <fireBaseContext.Provider value={{ firebase, db, FieldValue, analytics, getAuth, createUserWithEmailAndPassword }}>
    <App></App>
  </fireBaseContext.Provider>
);