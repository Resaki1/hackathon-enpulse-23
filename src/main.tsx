import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDHEl0nbMZTme4V1RC0T3MAwxf0yKnIj8",
  authDomain: "twincity-caa2c.firebaseapp.com",
  projectId: "twincity-caa2c",
  storageBucket: "twincity-caa2c.appspot.com",
  messagingSenderId: "373534765030",
  appId: "1:373534765030:web:fdb77d59e766bc11877027",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
