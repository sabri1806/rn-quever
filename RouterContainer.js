import React from "react";
import Router from "./Router";
import MovieActions from "./src/redux/actions/movie.actions";
import { connect } from "react-redux";
import { View } from "react-native";

const RouterContainer = ({ getWatchLaterMovies }) => {
  const onNavigationChange = (prevState, currentState) => {
    getWatchLaterMovies();
  };

  return <Router onNavigationStateChange={onNavigationChange} />;
};

const mapDispatchToProps = {
  getWatchLaterMovies: MovieActions.getWatchLaterMovies
};

export default connect(null, mapDispatchToProps)(RouterContainer);
