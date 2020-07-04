import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "native-base";
import * as firebase from "firebase";

export default class Home extends React.Component {
  state = {
    email: "",
    displayName: "",
  };

  componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser;
    this.setState({ email, displayName });
  }

  signOut = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hi {this.state.email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
