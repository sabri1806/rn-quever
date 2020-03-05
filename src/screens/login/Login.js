import React, { useEffect } from "react";
import { View, Button, StyleSheet, Image } from "react-native";
import { AsyncStorage } from "react-native";
import * as Google from "expo-google-app-auth";
// import { Image } from "react-native-elements";

const Login = ({ navigation }) => {
  //TODO: remove after development
  useEffect(() => {
    // navigation.setParams({ user: null });
  }, []);

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        behaviour: "web",
        androidClientId:
          "1011082311509-fj35vbeqjngpi9pukfskiaoah7bdi5jc.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        try {
          await AsyncStorage.setItem("userEmail", result.user.email);
        } catch (error) {
          // Error saving data
        }
        navigation.setParams({ user: result.user });
        navigation.navigate("Loading", { user: result.user });
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e);
      return { error: true };
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo.png")}
        style={{ height: 150, width: 250, margin: 100 }}
      />
      <Button
        color="#e67e22"
        onPress={signInWithGoogleAsync}
        title={"Sign In With Google"}
      />
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

export default Login;
