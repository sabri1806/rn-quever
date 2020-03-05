import axios from "axios";

const API_KEY = "9c38b7d";
const THE_MOVIE_DB_API_KEY = "2b5628de9b99a860ded3569d24480f1d";

//get all favorite-movies
const getMovie = id => {
  return axios.get("https://quever-api.appspot.com/api/favorites-movies/" + id);
};

const searchMovie = textSearch => {
  return axios.get(
    `https://www.omdbapi.com/?apiKey=${API_KEY}&s=${textSearch}`
  );
};

const getMovieDetail = movieId => {
  return axios.get(
    `https://www.omdbapi.com/?apiKey=${API_KEY}&i=${movieId}&plot=full&r=json`
  );
};

const getFavouriteMovieDetail = favouriteDetailId => {
  return axios.get(
    "https://quever-api.appspot.com/api/favorites-movies/" + favouriteDetailId
  );
};

const saveWatchLaterMovie = (email, omDBId, poster, title) => {
  const payload = {
    email,
    omDBId,
    poster,
    title
  };

  return axios.post(
    `https://quever-api.appspot.com/api/watch-later/add-watch-later-movie`,
    payload
  );
};

const saveFavourite = ({
  moviename,
  description,
  genre,
  year,
  cast,
  email
}) => {
  const payload = {
    moviename,
    description,
    genre,
    year,
    cast,
    email
  };
  return axios.post(
    "https://quever-api.appspot.com/api/favorites-movies",
    payload
  );
};

const getWatchLaterMovies = () => {
  return axios.get(
    "https://quever-api.appspot.com/api/watch-later/all-watch-later"
  );
};

const getFavouriteMovies = userEmail => {
  return axios.get(
    "https://quever-api.appspot.com/api/favorites-movies?email=" + userEmail
  );
};

const getPopularMovies = () => {
  return axios.get(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${THE_MOVIE_DB_API_KEY}`
  );
};

const deleteWatchLaterMovie = id => {
  return axios
    .delete(
      "https://quever-api.appspot.com/api/watch-later/delete-watch-later-movie/" +
        id
    )
    .then(res => {
      window.location = "/watch-later-movie-list";
    })
    .catch(err => {
      console.log("Error from MovieService_deleteWatchLaterMovie");
    });
};

const deleteAllWatchLaterMovie = () => {
  return axios
    .delete(
      "https://quever-api.appspot.com/api/watch-later/delete-all-watch-later-movie"
    )
    .then(res => {
      window.location = "/search-movie";
    })
    .catch(err => {
      console.log("Error from MovieService_deleteAllWatchLaterMovie");
    });
};

const rateMovieQueVer = (email, title, imdbID, rateValue) => {
  const payload = {
    email,
    title,
    imdbID,
    rateValue
  };
  return axios.post(`https://quever-api.appspot.com/api/rate/movies`, payload);
};

const calculateRate = (imdbID, rateValue) => {
  return axios.get(`https://quever-api.appspot.com/api/rate/movies/${imdbID}`);
};

const deleteFavouriteMovie = id => {
  return axios.delete(
    "https://quever-api.appspot.com/api/favorites-movies/" + id
  );
};

export default {
  getFavouriteMovies,
  getFavouriteMovieDetail,
  getMovie,
  searchMovie,
  getMovieDetail,
  getPopularMovies,
  saveWatchLaterMovie,
  getWatchLaterMovies,
  deleteFavouriteMovie,
  deleteWatchLaterMovie,
  deleteAllWatchLaterMovie,
  rateMovieQueVer,
  calculateRate,
  saveFavourite
};
