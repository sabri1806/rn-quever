import React from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";

const AppBar = () => {
  return (
    <Header
      placement="left"
      leftComponent={{ icon: "menu", color: "#fff" }}
      centerComponent={{ text: "Que Ver", style: { color: "#fff" } }}
      rightComponent={{ icon: "home", color: "#fff" }}
    />
  );
};

export default AppBar;
