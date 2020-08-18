import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/app/App';
import {BrowserRouter as Router} from 'react-router-dom';

import app from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyCx7zvSxEyxU_TqyXmXZj4Al8EtonMEcg4",
  authDomain: "globalrh-7095b.firebaseapp.com",
  databaseURL: "https://globalrh-7095b.firebaseio.com",
  projectId: "globalrh-7095b",
  storageBucket: "globalrh-7095b.appspot.com",
  messagingSenderId: "1034493100663",
  appId: "1:1034493100663:web:5b17d0b88bcb02068b3c72",
  measurementId: "G-2HGGDEE921"
};

app.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
   <Router>
   <App />
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

