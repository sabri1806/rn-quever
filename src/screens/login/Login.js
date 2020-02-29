import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { NavigationActions } from "react-navigation";
import * as Google from "expo-google-app-auth";
import { Image } from "react-native-elements";

const Login = ({ navigation }) => {
  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        behaviour: "web",
        androidClientId:
          "1011082311509-fj35vbeqjngpi9pukfskiaoah7bdi5jc.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      });
      if (result.type === "success") {
        navigation.navigate("App", { user: result.user });
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e);
      return { error: true };
    }
  };

  const handleGoToApp = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: "App"
    });

    navigation.dispatch(navigateAction);
  };

  return (
    <View style={styles.container}>
      <Image source={"../../assets/image.jpeg"} />
      <Button onPress={signInWithGoogleAsync} title={"Sign In Whit Google"} />
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
