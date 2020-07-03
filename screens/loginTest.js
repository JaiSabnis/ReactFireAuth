import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "native-base";

export default function LoginTest({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button onPress={navigation.navigate("Home")}></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
