import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  LayoutAnimation,
} from "react-native";
import { Button } from "native-base";
import * as firebase from "firebase";

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errorMessage: null,
  };

  static navigationOptions = {
    header: null,
  };

  login = () => {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => this.setState({ errorMessage: error.message }));

    firebase.auth().onAuthStateChanged((user) => {
      this.props.navigation.navigate("App");
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        <View>
          <Text style={styles.error}>{this.state.errorMessage}</Text>
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Email:</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            ></TextInput>
          </View>

          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>Password:</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            ></TextInput>
          </View>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={this.login}>
          <Text style={styles.whiteText}> Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignSelf: "center", marginTop: 30 }}
          onPress={() => this.props.navigation.navigate("Register")}
        >
          <Text>
            You new here?<Text style={{ color: "purple" }}> Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    marginTop: 32,
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center",
    color: "#514E5A",
  },
  error: {
    height: 72,
    alignSelf: "center",
    justifyContent: "center",
    marginHorizontal: 30,
    color: "red",
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: "purple",
    fontSize: 10,
    textTransform: "uppercase",
  },
  input: {
    borderBottomColor: "#b103fc",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "black",
  },
  loginBtn: {
    marginHorizontal: 30,
    backgroundColor: "#b103fc",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  whiteText: {
    color: "white",
    fontWeight: 500,
  },
});
