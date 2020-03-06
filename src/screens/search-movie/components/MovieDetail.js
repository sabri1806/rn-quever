import React, { useEffect, useState } from "react";
import { Image } from "react-native-elements";
import { View, Button, Text, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MovieService from "../../../services/MovieService";
import styles from "./MovieDetail.styles";
import { AsyncStorage } from "react-native";
import DetailBar from "../../../components/app-bar/DetailBar";

const MovieDetail = ({ movie, onBack, source }) => {
  const [movieDetail, setMovieDetail] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [average, setAverage] = useState();

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

    MovieService.calculateRate(movie.omDBId).then(response => {
      setAverage(response.data.average || 0);
    });
  }, []);

  const deleteWatchLater = () => {
    MovieService.deleteWatchLaterMovie(movie._id).then(() => {
      Alert.alert("Success", "Movie was removed from watch later!", [
        { text: "OK", onPress: () => onBack() }
      ]);
    });
  };

  const handleCalculateRate = rateValue => {
    MovieService.calculateRate(movie.omDBId, rateValue)
      .then(response => {
        setAverage(response.data.average);
        7;
      })
      .catch(err => {
        console.log(err); // eslint-disable-line
      });
  };

  const rateMovie = rateValue => {
    MovieService.rateMovieQueVer(
      currentUser,
      movie.Title,
      movie.omDBId,
      rateValue
    )
      .then(response => {
        Alert.alert("Success", "We received your feedback, thanks!");
        handleCalculateRate(rateValue);
      })
      .catch(err => {
        Alert.alert(
          "Invalid action",
          "You has already voted for this movie, thanks!!"
        );
      });
  };

  const handleWatchLater = () => {
    MovieService.saveWatchLaterMovie(
      currentUser,
      movie.imdbID,
      movie.Poster,
      movie.Title
    )
      .then(response => {
        Alert.alert("Success", "Movie was added to watch later!", [
          { text: "OK", onPress: () => onBack() }
        ]);
      })
      .catch(err => {
        Alert.alert("Error", "The movie was already added to your list", [
          { text: "OK", onPress: () => onBack() }
        ]);
      });
  };

  if (!movieDetail) return null;

  return (
    <View>
      {source !== "search" && <DetailBar />}
      <ScrollView>
        <View style={styles.imageContainer}>
          <View style={{ flex: 1 }}>
            <Image
              source={{ uri: movieDetail.Poster }}
              style={{ width: 120, height: 200 }}
            />
          </View>
          <ScrollView
            style={{
              minWidth: 200,
              maxWidth: 250,
              flex: 1,
              paddingTop: 5,
              paddingRight: 20,
              paddingLeft: 20,
              height: 200
            }}
          >
            <Text>{movieDetail.Plot}</Text>
          </ScrollView>
        </View>
        <View style={{ marginLeft: 20, marginBottom: 20, marginTop: 10 }}>
          <Text>Quever Rating: {average}</Text>
        </View>
        {source === "search" && (
          <>
            <View style={{ marginLeft: 20, marginBottom: 20, marginTop: -10 }}>
              <Text>Rate It:</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{ width: 20, flex: 1, marginLeft: 10, marginRight: 10 }}
              >
                <Button
                  title="1"
                  onPress={() => rateMovie(1)}
                  style={{
                    width: 20,
                    marginLeft: 10,
                    marginRight: 10
                  }}
                ></Button>
              </View>
              <View
                style={{ width: 20, flex: 1, marginLeft: 10, marginRight: 10 }}
              >
                <Button
                  title="2"
                  onPress={() => rateMovie(2)}
                  style={{
                    width: 20,
                    marginLeft: 10,
                    marginRight: 10
                  }}
                ></Button>
              </View>
              <View
                style={{ width: 20, flex: 1, marginLeft: 10, marginRight: 10 }}
              >
                <Button
                  title="3"
                  onPress={() => rateMovie(3)}
                  style={{
                    width: 20,
                    marginLeft: 10,
                    marginRight: 10
                  }}
                ></Button>
              </View>
              <View
                style={{ width: 20, flex: 1, marginLeft: 10, marginRight: 10 }}
              >
                <Button
                  title="4"
                  onPress={() => rateMovie(4)}
                  style={{
                    width: 20,
                    marginLeft: 10,
                    marginRight: 10
                  }}
                ></Button>
              </View>
              <View
                style={{ width: 20, flex: 1, marginLeft: 10, marginRight: 10 }}
              >
                <Button
                  title="5"
                  onPress={() => rateMovie(5)}
                  style={{
                    width: 20,
                    marginLeft: 10,
                    marginRight: 10
                  }}
                ></Button>
              </View>
            </View>
          </>
        )}
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
              title="Back"
              onPress={onBack}
            />
          </View>
          {source === "search" && (
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
                title="Watch Later"
                onPress={handleWatchLater}
              />
            </View>
          )}
          {source !== "search" && (
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
                title="Delete"
                onPress={deleteWatchLater}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetail;
