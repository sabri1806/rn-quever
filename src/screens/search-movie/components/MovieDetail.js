import React from "react";
import { Image } from "react-native-elements";
import { View, Button } from "react-native";

const MovieDetail = ({ movie, onBack }) => {
  return (
    <View>
      {/* <Image
        source={{ uri: movie.Poster }}
        style={{ width: 200, height: 200 }}
      /> */}
      <Button title="Volver" onPress={onBack} />
    </View>
  );
};

export default MovieDetail;
