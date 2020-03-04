import React, { useEffect, useState } from "react";
import { Image } from "react-native-elements";
import { View, Button, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MovieService from "../../../services/MovieService";

const MovieDetail = ({ movie, onBack }) => {
  const [movieDetail, setMovieDetail] = useState(null);
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

  useEffect(() => {
    MovieService.getMovieDetail(movie.imdbID).then(response => {
      setMovieDetail(response.data);
    });
  }, []);

  if (!movieDetail) return null;

  return (
    <ScrollView>
      <Image
        source={{ uri: movieDetail.Poster }}
        style={{ width: 200, height: 300 }}
      />
      <Text>{movieDetail.Plot}</Text>
      <Button
        color="#e67e22"
        style={styles.button}
        title="Volver"
        onPress={onBack}
      />
    </ScrollView>
  );
};

export default MovieDetail;
