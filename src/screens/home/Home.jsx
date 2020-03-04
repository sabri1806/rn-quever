import React, { useEffect, useState } from "react";
import AppBar from "../../components/app-bar/AppBar";
import MovieService from "../../services/MovieService";
import { DrawerActions } from "@react-navigation/native";
import { Card, Text } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  navigation.dispatch(DrawerActions.closeDrawer());
  useEffect(() => {
    MovieService.getPopularMovies().then(response => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <ScrollView>
      <AppBar navigation={navigation} />
      <Text style={{ padding: 24, textAlign: "center", fontSize: 16 }}>
        The Most Popular Movies
      </Text>
      {movies.map(movie => (
        <Card
          key={movie.id}
          title={movie.title}
          image={{
            uri: `http://image.tmdb.org/t/p/w185/${movie.poster_path}`
          }}
        >
          <Text style={{ marginBottom: 10 }}>{movie.original_title}</Text>
        </Card>
      ))}
    </ScrollView>
  );
};

export default Home;
