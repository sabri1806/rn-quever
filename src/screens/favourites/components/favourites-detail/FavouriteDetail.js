import React from "react";
import { View, Button, Text } from "react-native";
import styles from "./FavouriteDetail.styles";
import Moment from "moment";

const FavouriteDetail = ({ movie, onBack }) => {
  if (!movie) return null;

  return (
    <View style={styles.container}>
      <Text>{movie.moviename}</Text>
      <Text>{movie.description}</Text>
      <Text>{movie.email}</Text>
      <Text>{movie.year}</Text>
      <Text>{movie.cast}</Text>
      <Text>{Moment(movie.createdAt).format("DD/MMM/YYYY")}</Text>
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
