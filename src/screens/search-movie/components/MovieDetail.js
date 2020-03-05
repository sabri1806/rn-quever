import React, { useEffect, useState } from "react";
import { Image } from "react-native-elements";
import { View, Button, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MovieService from "../../../services/MovieService";
import styles from "./MovieDetail.styles";
import { AsyncStorage } from "react-native";

const MovieDetail = ({ movie, onBack, source, navigation }) => {
  const [movieDetail, setMovieDetail] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    MovieService.getMovieDetail(movie.imdbID || movie.omDBId).then(response => {
      setMovieDetail(response.data);
    });
    const getUserFromStorage = async () => {
      try {
        const userEmail = await AsyncStorage.getItem("userEmail");
        if (userEmail !== null) {
          setCurrentUser(userEmail);
        }
      } catch (error) {
        console.log("We was not able to recover the user"); // eslint-disable-line
      }
    };

    getUserFromStorage();
  }, []);

  const handleWatchLater = () => {
    MovieService.saveWatchLaterMovie(
      currentUser,
      movie.imdbID,
      movie.Poster,
      movie.Title
    ).then(response => {
      onBack();
    });
  };

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
              marginRight: 50,
              marginBottom: 5,
              marginLeft: 50
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
                onPress={handleWatchLater}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetail;
