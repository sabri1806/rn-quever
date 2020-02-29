import axios from "axios";

const API_KEY = "9c38b7d";

//get all favorite-movies
const getMovie = id => {
  return axios.get("https://quever-api.appspot.com/api/favorites-movies/" + id);

  //   .then(res => {
  //      console.log("Print-showMovieDetails-API-response: " + res.data);
  //     this.setState({
  //       movie: res.data
  //     })
  //   })
  //   .catch(err => {
  //     console.log("Error from ShowMovietails");
  //   })
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

const saveWatchLaterMovie = (email, omDBId, poster) => {
  const payload = {
    email,
    omDBId,
    poster
  };
  console.log(payload);
  return axios.post(
    `https://quever-api.appspot.com/api/watch-later/add-watch-later-movie`,
    payload
  );
};

const getWatchLaterMovies = () => {
  return axios.get(
    "https://quever-api.appspot.com/api/watch-later/all-watch-later"
  );
};

const getFavouriteMovies = () => {
  return axios.get("https://quever-api.appspot.com/api/favorites-movies");
};

const deleteWatchLaterMovie = id => {
  console.log(id, "que trae esto");
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

const rateMovieQueVer = (email, imdbID, rateValue) => {
  const payload = {
    email,
    imdbID,
    rateValue
  };
  return axios.post(`https://quever-api.appspot.com/api/rate/movies`, payload);
};

const calculateRate = (imdbID, rateValue) => {
  return axios.get(`https://quever-api.appspot.com/api/rate/movies/${imdbID}`);
};

export default {
  getFavouriteMovies,
  getWatchLaterMovies,
  getMovie,
  searchMovie,
  getMovieDetail,
  saveWatchLaterMovie,
  getWatchLaterMovies,
  deleteWatchLaterMovie,
  deleteAllWatchLaterMovie,
  rateMovieQueVer,
  calculateRate
};
