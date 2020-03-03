import React, { useEffect } from "react";
import { Text, StyleSheet, ActivityIndicator, View } from "react-native";

import firebase from "firebase";
import { DrawerActions } from "react-navigation-drawer";

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    console.log("user->", navigation.getParam("user")); // eslint-disable-line
    if (navigation.getParam("user")) {
      navigation.navigate("App", { user });
    } else {
      navigation.navigate("Login");
    }
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
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
