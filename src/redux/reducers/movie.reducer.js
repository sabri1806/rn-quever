import { handleActions } from "redux-actions";
import MovieActions from "../actions/movie.actions";

const initialState = {
  movie: null,
  movieList: null,
  movieDetail: null,
  watchLaterMovies: []
};

export default handleActions(
  {
    [MovieActions.getMovieSuccess]: (state, { payload }) =>
      handleGetMovie(state, payload),
    [MovieActions.searchMoviesSuccess]: (state, { payload }) =>
      handleSearchMovie(state, payload),
    [MovieActions.getMovieDetailSuccess]: (state, { payload }) =>
      handleGetDetailMovie(state, payload),
    [MovieActions.getWatchLaterMoviesSuccess]: (state, { payload }) =>
      handleGetWatchLaterMovies(state, payload),
    [MovieActions.removeLastMovieSuccess]: state => handleRemoveLastMovie(state)
  },
  initialState
);

const handleGetMovie = (state, payload) => {
  return { ...state, movie: payload };
};

const handleSearchMovie = (state, payload) => {
  const { Search } = payload;
  return { ...state, movieList: Search || [] };
};

const handleGetDetailMovie = (state, payload) => {
  return { ...state, movieDetail: payload };
};

const handleRemoveLastMovie = state => {
  return { ...state, movieDetail: null };
};

const handleGetWatchLaterMovies = (state, payload) => {
  return { ...state, watchLaterMovies: payload };
};
