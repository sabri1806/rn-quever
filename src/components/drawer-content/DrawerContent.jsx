import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native-elements";
import { View } from "react-native";
import { DrawerActions } from "@react-navigation/native";

const DrawerContent = ({ navigation }) => {
  const styles = {
    container: {
      paddingTop: 50
    },
    linkButton: {
      alignItems: "center",
      backgroundColor: "#fff",
      padding: 10
    },
    logOutbutton: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    }
  };

  const onNavigate = screenPage => {
    navigation.navigate(screenPage);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.linkButton}
        onPress={() => onNavigate("Home")}
      >
        <View>
          {/* <Image style={styles.iconStyle}
            source={home} /> */}
          <Text>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.linkButton}
        onPress={() => onNavigate("App")}
      >
        <View>
          {/* <Image style={styles.iconStyle}
            source={home} /> */}
          <Text>MainTabs</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logOutbutton}
        onPress={() => onNavigate("Login")}
      >
        <View>
          {/* <Image style={styles.iconStyle}
            source={home} /> */}
          <Text>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerContent;
