"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "messenger-like-app.firebaseapp.com",
  databaseURL: "https://messenger-like-app.firebaseio.com",
  projectId: "messenger-like-app",
  storageBucket: "messenger-like-app.appspot.com",
  messagingSenderId: "200883298318",
  appId: "1:200883298318:web:a8effb9d3836d73eed1c5f",
  measurementId: "G-SD5FPD7Y49"
};

var firebaseApp = _firebase["default"].initializeApp(firebaseConfig);

var db = firebaseApp.firestore();
var _default = db;
exports["default"] = _default;