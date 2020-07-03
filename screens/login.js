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

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log(user);
      }
    });
  }

  signUpUser = (email, password) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.toString());
    }
  };

  loginUser = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function (user) {
          console.log(user);
        });
    } catch (error) {
      console.log(error.toString());
    }
  };

  async facebookLogin() {
    /*
      const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
        "290756135378851",
        {
          permissions: ["public_profile"],
        }
      );
  
      if (type == "success") {
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        firebase
          .auth()
          .signInWithCredential(credential)
          .catch((error) => {
            console.log(error);
          });
      }
      */
  }

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item>
            <Label>Email:</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
            />
          </Item>
          <Item>
            <Label>Password:</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
            />
          </Item>
          <Button
            style={styles.loginBtn}
            success
            full
            onPress={this.loginUser(this.state.email, this.state.password)}
          >
            <Text style={styles.btnText}> Login </Text>
          </Button>
          <Button
            style={styles.loginBtn}
            primary
            full
            onPress={this.signUpUser(this.state.email, this.state.password)}
          >
            <Text style={styles.btnText}> Sign Up </Text>
          </Button>
          <Button
            style={styles.loginBtn}
            primary
            full
            onPress={this.facebookLogin()}
          >
            <Text style={styles.btnText}> Log In with Facebook </Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
  },
  loginBtn: {
    marginTop: 20,
    textAlign: "center",
  },
  btnText: {
    color: "white",
  },
});
