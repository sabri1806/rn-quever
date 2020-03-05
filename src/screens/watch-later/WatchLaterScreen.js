import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ScrollView, View } from "react-native";
import { ListItem, Button } from "react-native-elements";
import NoResults from "./../search-movie/components/NoResults";
import MovieDetail from "../search-movie/components/MovieDetail";
import AppBar from "../../components/app-bar/AppBar";
import movieActions from "../../redux/actions/movie.actions";

const WatchLaterScreen = ({
  navigation,
  getWatchLaterMovies,
  watchLaterMovies
}) => {
  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    if (!watchLaterMovies) {
      getWatchLaterMovies();
    }
  }, []);
  // TODO: tomar esto de la db por el amor de Dios
  const mov = {
    tt0462499: "Rambo",
    tt1520211: "The Walking Dead - Defetead",
    tt2022190: "The Walking Dead - United"
  };

  const handleSelectMovie = movie => {
    setCurrentMovie(movie);
  };

  if (!watchLaterMovies) return null;

  return (
    <ScrollView>
      {!currentMovie && (
        <>
          <AppBar navigation={navigation} />
          {watchLaterMovies.length > 0 ? (
            watchLaterMovies.map((movie, i) => (
              <ListItem
                key={i}
                title={movie.title}
                leftAvatar={{ rounded: false, source: { uri: movie.poster } }}
                bottomDivider
                chevron={{ color: "#f00" }}
                onPress={() => handleSelectMovie(movie)}
              />
            ))
          ) : (
            <NoResults />
          )}
          <View style={{ marginTop: "10%", backgroundColor: "#e67e22" }}>
            <Button onPress={getWatchLaterMovies} title={"Refresh"} />
          </View>
        </>
      )}
      {currentMovie && (
        <MovieDetail
          movie={currentMovie}
          onBack={() => setCurrentMovie(null)}
        />
      )}
    </ScrollView>
  );
};

const mapStateToProps = ({ movieReducer }) => {
  return {
    watchLaterMovies: movieReducer.watchLaterMovies
  };
};

const mapDispatchToProps = {
  getWatchLaterMovies: movieActions.getWatchLaterMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchLaterScreen);
