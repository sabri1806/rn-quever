import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ScrollView, View, Button } from "react-native";
import { ListItem } from "react-native-elements";
import NoResults from "./../search-movie/components/NoResults";
import MovieDetail from "../search-movie/components/MovieDetail";
import AppBar from "../../components/app-bar/AppBar";
import movieActions from "../../redux/actions/movie.actions";
import MovieService from "../../services/MovieService";

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

  const handleSelectMovie = movie => {
    setCurrentMovie(movie);
  };

  const deleteAllWatchLater = () => {
    MovieService.deleteAllWatchLaterMovie()
      .then(() => {
        getWatchLaterMovies();
      })
      .catch(err => {
        console.log(err); // eslint-disable-line
      });
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
          <View style={{ marginTop: "10%", marginLeft: 50, marginRight: 50 }}>
            <Button
              color="#e67e22"
              onPress={getWatchLaterMovies}
              title={"Refresh"}
            />
          </View>
          {watchLaterMovies && watchLaterMovies.length > 0 && (
            <View
              style={{
                marginTop: 5,
                marginRight: 50,
                marginBottom: 5,
                marginLeft: 50
              }}
            >
              <Button
                onPress={deleteAllWatchLater}
                color="#e67e22"
                title="Delete All"
              ></Button>
            </View>
          )}
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
