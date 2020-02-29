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
import MovieService from "../../services/MovieService";
import NoResults from "./../search-movie/components/NoResults";
import AppBar from "../../components/app-bar/AppBar";

const WatchLaterScreen = ({ navigation }) => {
  const [watchLaterMovies, setWatchLaterMovies] = useState([]);

  useEffect(() => {
    MovieService.getWatchLaterMovies()
      .then(({ data }) => {
        setWatchLaterMovies(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <ScrollView>
      <AppBar />
      {watchLaterMovies.length > 0 ? (
        watchLaterMovies.map((movie, i) => (
          <ListItem
            key={i}
            leftAvatar={{ rounded: false, source: { uri: movie.poster } }}
            bottomDivider
            chevron={{ color: "#f00" }}
          />
        ))
      ) : (
        <NoResults />
      )}
    </ScrollView>
  );
};

export default WatchLaterScreen;
