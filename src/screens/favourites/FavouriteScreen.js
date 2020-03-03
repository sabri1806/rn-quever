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

const FavouriteScreen = ({ navigation, favouritesMovies }) => {
  useEffect(() => {
    if (!navigation.getParam("user")) {
      navigation.navigate("Login");
    }
  }, []);

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

export default connect(mapStateToProps, null)(FavouriteScreen);
