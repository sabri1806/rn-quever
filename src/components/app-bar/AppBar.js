import React from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";
import { DrawerActions } from "react-navigation-drawer";

const AppBar = ({ navigation }) => {
  const goToHome = () => {
    navigation.navigate("Home");
  };
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <View>
      <Header
        placement="left"
        leftComponent={{ icon: "menu", color: "#fff", onPress: openDrawer }}
        centerComponent={{ text: "Que Ver", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff", onPress: goToHome }}
      />
    </View>
  );
};

export default AppBar;
