import React, { useState } from "react";
import { connect } from "react-redux";
import MovieActions from "../../redux/actions/movie.actions";
import { TextInput } from "react-native-gesture-handler";
import { View, Text, StyleSheet, Button } from "react-native";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

const SearchMovieScreen = ({ movies, searchMovies }) => {
  const [searchText, setSearchText] = useState("duro de matar");
  const [currentMovie, setCurrentMovie] = useState(null);

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
      <Text>Soy Search Movie</Text>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={text => updateSearchText(text)}
        value={searchText}
      ></TextInput>
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
  },
  textInputStyle: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
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
