import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "native-base";

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button onPress={this.props.navigation.navigate("LoginTest")}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
