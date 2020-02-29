import React, { useEffect } from "react";
import { Text, StyleSheet, ActivityIndicator, View } from "react-native";

import firebase from "firebase";

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  const checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      //TODO: change order inside if to avoid been redirect to a
      //wrong page

      console.log(navigation.getParam("user"));
      if (navigation.getParam("user")) {
        navigation.navigate("Login");
      } else {
        navigation.navigate("App", { user });
      }
    });
  };

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
