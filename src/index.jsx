import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import fireBaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';
// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <fireBaseContext.Provider value={{ firebase, FieldValue }}>
    <App></App>
  </fireBaseContext.Provider>
);