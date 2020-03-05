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
      <Header backgroundColor="#e67e22" placement="left" />
    </View>
  );
};

export default AppBar;
