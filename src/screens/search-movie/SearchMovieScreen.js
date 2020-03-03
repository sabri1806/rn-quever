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
  const [searchText, setSearchText] = useState("rocky");
  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    if (!navigation.getParam("user")) {
      navigation.navigate("Login");
    }
  }, []);

  const search = () => {
    console.log("Buscando pelis: ", searchMovies);
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
      <Input
        placeholder="BASIC INPUT"
        value={searchText}
        onChangeText={text => updateSearchText(text)}
      />
      <Button title="SEARCH MOVIE" onPress={search}></Button>
      {currentMovie ? (
        <MovieDetail
          movie={currentMovie}
          onBack={() => setCurrentMovie(null)}
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
