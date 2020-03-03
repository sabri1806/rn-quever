import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import MovieService from "../../services/MovieService";
import NoResults from "./../search-movie/components/NoResults";
import AppBar from "../../components/app-bar/AppBar";

const WatchLaterScreen = ({ navigation, watchLaterMovies }) => {
  // TODO: tomar esto de la db por el amor de Dios
  const mov = {
    tt0462499: "Rambo",
    tt1520211: "The Walking Dead - Defetead",
    tt2022190: "The Walking Dead - United"
  };
  return (
    <ScrollView>
      <AppBar navigation={navigation} />
      {watchLaterMovies.length > 0 ? (
        watchLaterMovies.map((movie, i) => (
          <ListItem
            key={i}
            title={mov[movie.omDBId]}
            leftAvatar={{ rounded: false, source: { uri: movie.poster } }}
            bottomDivider
            chevron={{ color: "#f00" }}
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
    watchLaterMovies: movieReducer.watchLaterMovies
  };
};

export default connect(mapStateToProps, null)(WatchLaterScreen);
