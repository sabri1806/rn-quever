import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  ScrollView
} from "react-native";
import { ListItem } from "react-native-elements";
import MovieService from "../../services/MovieService";
import NoResults from "./../search-movie/components/NoResults";
import AppBar from "../../components/app-bar/AppBar";

const FavouriteScreen = ({ navigation }) => {
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  useEffect(() => {
    if (!navigation.getParam("user")) {
      navigation.navigate("Login");
    }
  }, []);

  useEffect(() => {
    MovieService.getFavouriteMovies().then(({ data }) => {
      setFavouriteMovies(data);
    });
  }, []);

  return (
    <ScrollView>
      <AppBar />
      {favouriteMovies.length > 0 ? (
        favouriteMovies.map((movie, i) => (
          <ListItem
            key={i}
            title={movie.moviename}
            subtitle={movie.genre}
            bottomDivider
            chevron={{ color: "#f00" }}
            onPress={() => onSelectMovie(movie)}
          />
        ))
      ) : (
        <NoResults />
      )}
    </ScrollView>
  );
};

export default FavouriteScreen;
