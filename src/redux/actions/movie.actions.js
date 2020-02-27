import MovieService from "../../services/MovieService";
import { createActions } from "redux-actions";

const {
  getMovieSuccess,
  searchMoviesSuccess,
  getMovieDetailSuccess,
  removeLastMovieSuccess
} = createActions({
  GET_MOVIE_SUCCESS: data => data,
  SEARCH_MOVIES_SUCCESS: data => data,
  GET_MOVIE_DETAIL_SUCCESS: data => data,
  REMOVE_LAST_MOVIE_SUCCESS: data => data
});

const getMovie = id => async dispatch => {
  try {
    const response = await MovieService.getMovie(id);
    dispatch(getMovieSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
};

const searchMovies = searchText => async dispatch => {
  try {
    const response = await MovieService.searchMovie(searchText);
    dispatch(searchMoviesSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
};

const getMovieDetail = movieId => async dispatch => {
  try {
    const response = await MovieService.getMovieDetail(movieId);
    dispatch(getMovieDetailSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
};

const removeLastMovie = () => async dispatch => {
  try {
    dispatch(removeLastMovieSuccess());
  } catch (err) {
    console.log(err);
  }
};

export default {
  getMovie,
  getMovieSuccess,
  searchMovies,
  searchMoviesSuccess,
  getMovieDetail,
  getMovieDetailSuccess,
  removeLastMovie,
  removeLastMovieSuccess
};
