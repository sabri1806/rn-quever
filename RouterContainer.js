import React from "react";
import Router from "./Router";
import MovieActions from "./src/redux/actions/movie.actions";
import { connect } from "react-redux";

const RouterContainer = ({ getFavouritesMovies, getWatchLaterMovies }) => {
  const onNavigationChange = () => {
    getWatchLaterMovies();
    getFavouritesMovies();
  };

  return <Router onNavigationStateChange={onNavigationChange} />;
};

const mapDispatchToProps = {
  getFavouritesMovies: MovieActions.getFavouritesMovies,
  getWatchLaterMovies: MovieActions.getWatchLaterMovies
};

export default connect(null, mapDispatchToProps)(RouterContainer);
