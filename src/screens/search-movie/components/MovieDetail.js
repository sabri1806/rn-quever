import React, { useEffect, useState } from "react";
import { Image } from "react-native-elements";
import { View, Button, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MovieService from "../../../services/MovieService";
import styles from "./MovieDetail.styles";

const MovieDetail = ({ movie, onBack, source }) => {
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    MovieService.getMovieDetail(movie.imdbID || movie.omDBId).then(response => {
      setMovieDetail(response.data);
    });
  }, []);

  if (!movieDetail) return null;

  return (
    <View>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: movieDetail.Poster }}
            style={{ width: 200, height: 300 }}
          />
        </View>
        <ScrollView
          style={{
            paddingTop: 5,
            paddingRight: 20,
            paddingBottom: 5,
            paddingLeft: 20,
            marginTop: 20
          }}
        >
          <Text>{movieDetail.Plot}</Text>
        </ScrollView>
        <View style={{ margin: 10 }}>
          <View
            style={{
              marginTop: 5,
              marginRight: 20,
              marginBottom: 5,
              marginLeft: 20
            }}
          >
            <Button
              color="#e67e22"
              style={styles.button}
              title="Volver"
              onPress={onBack}
            />
          </View>
          {source === "search" && (
            <View
              style={{
                marginTop: 5,
                marginRight: 20,
                marginBottom: 5,
                marginLeft: 20
              }}
            >
              <Button
                color="#e67e22"
                style={styles.button}
                title="Watch Later"
                onPress={onBack}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetail;
