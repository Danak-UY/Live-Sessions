import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "messenger-like-app.firebaseapp.com",
  databaseURL: "https://messenger-like-app.firebaseio.com",
  projectId: "messenger-like-app",
  storageBucket: "messenger-like-app.appspot.com",
  messagingSenderId: "200883298318",
  appId: "1:200883298318:web:a8effb9d3836d73eed1c5f",
  measurementId: "G-SD5FPD7Y49",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
