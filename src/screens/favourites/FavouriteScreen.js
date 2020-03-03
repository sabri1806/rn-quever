import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  ScrollView
} from "react-native";
import { ListItem } from "react-native-elements";
import NoResults from "./../search-movie/components/NoResults";
import AppBar from "../../components/app-bar/AppBar";
import MovieActions from "../../redux/actions/movie.actions";

const FavouriteScreen = ({
  getFavouritesMovies,
  navigation,
  favouritesMovies
}) => {
  useEffect(() => {
    if (!favouritesMovies) {
      getFavouritesMovies();
    }
  }, []);
  console.log(favouritesMovies); // eslint-disable-line
  if (!favouritesMovies) return null;

  return (
    <ScrollView>
      <AppBar navigation={navigation} />
      {favouritesMovies.length > 0 ? (
        favouritesMovies.map((movie, i) => (
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

const mapStateToProps = ({ movieReducer }) => {
  return {
    favouritesMovies: movieReducer.favouritesMovies
  };
};

const mapDispatchToProps = {
  getFavouritesMovies: MovieActions.getFavouritesMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteScreen);
