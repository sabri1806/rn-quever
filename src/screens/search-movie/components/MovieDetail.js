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
      padding: 30,
      width: 10
    }
  };

  useEffect(() => {
    MovieService.getMovieDetail(movie.imdbID).then(response => {
      setMovieDetail(response.data);
    });
  }, []);

  if (!movieDetail) return null;

  return (
    <View>
      <ScrollView>
        <Image
          source={{ uri: movieDetail.Poster }}
          style={{ width: 200, height: 300 }}
        />
        <ScrollView
          style={{
            height: 150,
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
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetail;
