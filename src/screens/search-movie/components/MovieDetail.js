import React from "react";
import { Image } from "react-native-elements";
import { View, Button } from "react-native";

const MovieDetail = ({ movie, onBack }) => {
  const styles = {
    container: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      paddingTop: 30
    },
    imageContainer: {
      marginTop: 20,
      marginBottom: 50
    },
    button: {
      marginTop: 20,
      padding: 30
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: movie.Poster }}
          style={{ width: 200, height: 300 }}
        />
      </View>
      <Button style={styles.button} title="Volver" onPress={onBack} />
    </View>
  );
};

export default MovieDetail;
