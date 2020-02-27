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

const FavouriteScreen = () => {
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  useEffect(() => {
    MovieService.getFavouriteMovies().then(({ data }) => {
      console.log(data);
      setFavouriteMovies(data);
    });
  }, []);

  return (
    <ScrollView>
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
