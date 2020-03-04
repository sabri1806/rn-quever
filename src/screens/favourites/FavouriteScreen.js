import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import NoResults from "./../search-movie/components/NoResults";
import AppBar from "../../components/app-bar/AppBar";
import MovieActions from "../../redux/actions/movie.actions";

const FavouriteScreen = ({
  getFavouritesMovies,
  navigation,
  favouritesMovies
}) => {
  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    if (!favouritesMovies) {
      getFavouritesMovies();
    }
  }, []);

  const handleSelectMovie = movie => {
    setCurrentMovie(movie);
    console.log(movie); // eslint-disable-line
  };

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
            onPress={handleSelectMovie}
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
