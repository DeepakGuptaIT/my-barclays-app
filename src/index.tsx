import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOL3EwLGZB2JwdczT_6uhKPAYRltFOtuc",
  authDomain: "my-backlays-app.firebaseapp.com",
  projectId: "my-backlays-app",
  storageBucket: "my-backlays-app.appspot.com",
  messagingSenderId: "392096033269",
  appId: "1:392096033269:web:b79098bfef9b5cd72a18bc"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
