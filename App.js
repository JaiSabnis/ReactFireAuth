import React from "react";
import AppNav from "./routes/navi";

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA7B0er6GBHSWYCQ04x6EVRSbmmJSWlqHU",
  authDomain: "reactchat-1beae.firebaseapp.com",
  databaseURL: "https://reactchat-1beae.firebaseio.com",
  projectId: "reactchat-1beae",
  storageBucket: "reactchat-1beae.appspot.com",
  messagingSenderId: "1054487601789",
  appId: "1:1054487601789:web:fc528ddcd66464f4ffc714",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default function App() {
  return <AppNav />;
}
