import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import MovieActions from "../../redux/actions/movie.actions";
import { TextInput } from "react-native-gesture-handler";
import { View, Text, StyleSheet, Button } from "react-native";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import AppBar from "../../components/app-bar/AppBar";
import { Input } from "react-native-elements";

const SearchMovieScreen = ({ navigation, movies, searchMovies }) => {
  const [searchText, setSearchText] = useState("");
  const [currentMovie, setCurrentMovie] = useState(null);

  const search = () => {
    searchMovies(searchText);
  };

  const updateSearchText = text => {
    setSearchText(text);
  };

  const handleSelectMovie = movie => {
    setCurrentMovie(movie);
  };

  return (
    <View style={styles.textStyle}>
      <AppBar navigation={navigation} />
      {!currentMovie && (
        <View style={{ marginTop: 30 }}>
          <View style={{ border: "1px solid " }}>
            <Input
              placeholder="Movie name"
              value={searchText}
              onChangeText={text => updateSearchText(text)}
            />
          </View>
          <View style={{ marginTop: 30 }}>
            <View style={{ marginLeft: 80, width: 200 }}>
              <Button
                color="#e67e22"
                style={{ width: 200 }}
                title="SEARCH MOVIE"
                onPress={search}
              ></Button>
            </View>
          </View>
        </View>
      )}
      {currentMovie ? (
        <MovieDetail
          movie={currentMovie}
          onBack={() => setCurrentMovie(null)}
          source={"search"}
        />
      ) : (
        <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center"
  }
});

const mapStateToProps = ({ movieReducer }) => {
  return {
    movies: movieReducer.movieList
  };
};

const mapDispatchToProps = {
  searchMovies: MovieActions.searchMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovieScreen);
