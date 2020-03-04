import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  ScrollView
} from "react-native";
import { ListItem } from "react-native-elements";
import NoResults from "./NoResults";

const MovieList = ({ onSelectMovie, movies }) => {
  if (!movies) {
    return null;
  }

  return (
    <ScrollView style={{ marginTop: 20 }}>
      {movies.length > 0 ? (
        movies.map((movie, i) => (
          <ListItem
            key={i}
            title={movie.Title}
            leftAvatar={{ rounded: false, source: { uri: movie.Poster } }}
            subtitle={movie.Year}
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

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 30,
    marginLeft: 50,
    maxWidth: 100
  }
});

export default MovieList;
