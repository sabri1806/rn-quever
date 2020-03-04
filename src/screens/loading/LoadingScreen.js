import React, { useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    try {
      if (navigation.getParam("user")) {
        navigation.navigate("App");
      } else {
        console.log("Al login...."); // eslint-disable-line
        navigation.navigate("Login");
      }
    } catch (err) {
      console.log("Error Al login...."); // eslint-disable-line
      navigation.navigate("Login");
    }
  });

  return (
    <View style={styles.container}>
      {/* <ActivityIndicator size="large" /> */}
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default LoadingScreen;
