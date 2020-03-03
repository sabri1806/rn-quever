import React, { useEffect } from "react";
import { Text, StyleSheet, ActivityIndicator, View } from "react-native";

import firebase from "firebase";
import { DrawerActions } from "react-navigation-drawer";

const LoadingScreen = ({ navigation }) => {
  // const checkIfLoggedIn = () => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     //TODO: change order inside if to avoid been redirect to a
  //     //wrong page

  //     if (navigation.getParam("user")) {
  //       navigation.navigate("Login");
  //     } else {
  //       navigation.navigate("App", { user });
  //     }
  //   });
  // };

  return (
    <View style={styles.container}>
      {/* <ActivityIndicator size="large" /> */}
      <Text>Loading</Text>
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
