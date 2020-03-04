import React from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";
import { DrawerActions } from "react-navigation-drawer";

const AppBar = ({ navigation }) => {
  const goToHome = () => {
    navigation.navigate("Home");
    navigation.navigate("Login");
  };
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={{ backgroundColor: "#e67e22" }}>
      <Header
        backgroundColor="#e67e22"
        placement="left"
        leftComponent={{ icon: "menu", color: "#fff", onPress: openDrawer }}
        centerComponent={{ text: "Que Ver", style: { color: "#fff" } }}
        rightComponent={{
          icon: "exit-to-app",
          color: "#fff",
          onPress: goToHome
        }}
      />
    </View>
  );
};

export default AppBar;
