import React from "react";
import { View, Button } from "react-native";
import styles from "./FavouriteDetail.styles";
import Moment from "moment";
import { Text } from "react-native-elements";

const FavouriteDetail = ({ movie, onBack }) => {
  if (!movie) return null;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text h4>Movie Info</Text>
      </View>
      <View style={styles.text}>
        <Text h5>Name: {movie.moviename}</Text>
      </View>
      <View style={styles.text}>
        <Text h5>Description {movie.description}</Text>
      </View>
      <View style={styles.text}>
        <Text h5>Year: {movie.year}</Text>
      </View>
      <View style={styles.text}>
        <Text h5>Cast: {movie.cast}</Text>
      </View>
      <View style={styles.text}>
        <Text h5>
          Creation Date: {Moment(movie.createdAt).format("DD/MMM/YYYY")}
        </Text>
      </View>
      <View style={styles.backBtnContainer}>
        <View style={styles.backBtn}>
          <Button
            color="#e67e22"
            style={styles.button}
            title="Volver"
            onPress={onBack}
          />
        </View>
      </View>
    </View>
  );
};

export default FavouriteDetail;
