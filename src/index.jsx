import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import fireBaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';
// eslint-disable-next-line no-undef
ReactDOM.render(
  <fireBaseContext.Provider value={{ firebase, FieldValue }}>
    <h1> Hello </h1>
    ,
  </fireBaseContext.Provider>,
  document.getElementById('root')
);
