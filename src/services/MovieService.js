import axios from "axios";

const API_KEY = "9c38b7d";

//get all favorite-movies
const getMovie = id => {
  return axios.get("http://localhost:8082/api/favorites-movies/" + id);

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
    `http://localhost:8082/api/watch-later/add-watch-later-movie`,
    payload
  );
};

const getWatchLaterMovies = () => {
  //simulate a service
  /* return new Promise((accept, reject) => {
      accept('todo ok');
    }); */
  return axios.get("http://localhost:8082/api/watch-later/all-watch-later");
};

const deleteWatchLaterMovie = id => {
  console.log(id, "que trae esto");
  return axios
    .delete(
      "http://localhost:8082/api/watch-later/delete-watch-later-movie/" + id
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
      "http://localhost:8082/api/watch-later/delete-all-watch-later-movie"
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
  return axios.post(`http://localhost:8082/api/rate/movies`, payload);
};

const calculateRate = (imdbID, rateValue) => {
  return axios.get(`http://localhost:8082/api/rate/movies/${imdbID}`);
};

export default {
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
