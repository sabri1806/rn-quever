import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const saludo = <Text>Hola de nuevo</Text>;
  return (
    <View>
      <Text style={styles.textStyle}>this is the components screen</Text>
      {saludo}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ComponentsScreen;
