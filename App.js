import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Container,
  Content,
  Header,
  Form,
  Input,
  Item,
  Button,
  Label,
} from "native-base";
// import Expo from "expo";

import * as firebase from "firebase";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import LoginNav from "./routes/loginNav";
import Login from "./screens/login";

const firebaseConfig = {
  apiKey: "AIzaSyA7B0er6GBHSWYCQ04x6EVRSbmmJSWlqHU",
  authDomain: "reactchat-1beae.firebaseapp.com",
  databaseURL: "https://reactchat-1beae.firebaseio.com",
  projectId: "reactchat-1beae",
  storageBucket: "reactchat-1beae.appspot.com",
  messagingSenderId: "1054487601789",
  appId: "1:1054487601789:web:6bc6ebd555907d17ffc714",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return <Login />;
  }
}
