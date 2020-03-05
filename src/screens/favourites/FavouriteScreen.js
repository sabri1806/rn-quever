import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ScrollView, View, Button, AsyncStorage } from "react-native";
import { ListItem } from "react-native-elements";
import NoResults from "./../search-movie/components/NoResults";
import AppBar from "../../components/app-bar/AppBar";
import MovieActions from "../../redux/actions/movie.actions";
import FavouriteDetail from "./components/favourites-detail/FavouriteDetail";

const FavouriteScreen = ({
  getFavouritesMovies,
  navigation,
  favouritesMovies
}) => {
  const [currentMovie, setCurrentMovie] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const getUserFromStorage = async () => {
      try {
        const userEmail = await AsyncStorage.getItem("userEmail");
        if (userEmail !== null) {
          setCurrentUser(userEmail);
          if (!favouritesMovies) {
            getFavouritesMovies(userEmail);
          }
        }
      } catch (error) {
        console.log("We was not able to recover the user"); // eslint-disable-line
      }
    };

    getUserFromStorage();
  }, []);

  const handleSelectMovie = movie => {
    setCurrentMovie(movie);
  };

  const handleBack = () => {
    getFavouritesMovies(currentUser);
    setCurrentMovie(null);
  };
  if (!favouritesMovies) return null;
  return (
    <View>
      <AppBar navigation={navigation} />
      {!currentMovie && (
        <ScrollView>
          {favouritesMovies.length > 0 ? (
            favouritesMovies.map((movie, i) => (
              <ListItem
                key={i}
                title={movie.moviename}
                subtitle={movie.genre}
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
              onPress={() => getFavouritesMovies(currentUser)}
              title={"Refresh"}
            />
          </View>
          <View style={{ marginTop: 10, marginLeft: 50, marginRight: 50 }}>
            <Button
              color="#e67e22"
              onPress={() => navigation.navigate("FavouriteCreate")}
              title={"Create New Favourite"}
            />
          </View>
        </ScrollView>
      )}
      {currentMovie && (
        <FavouriteDetail movie={currentMovie} onBack={handleBack} />
      )}
    </View>
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
