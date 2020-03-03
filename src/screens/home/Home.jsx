import React, { useEffect, useState } from "react";
import { Text } from "react-native-elements";
import { View } from "react-native";
import AppBar from "../../components/app-bar/AppBar";
import MovieService from "../../services/MovieService";
import { DrawerActions } from "@react-navigation/native";

const Home = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  navigation.dispatch(DrawerActions.closeDrawer());
  useEffect(() => {
    MovieService.getPopularMovies().then(response => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <View>
      <AppBar navigation={navigation} />
      {movies.map(movie => (
        <Text key={movie.id}>
          {movie.title} - {movie.popularity}
        </Text>
      ))}
    </View>
  );
};

export default Home;
