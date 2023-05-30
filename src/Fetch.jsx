import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'b889b1f15800992b1379ee4939d9484c';

export const getTrendingMovies = async () => {
  const query = `trending/movie/day?api_key=${KEY}`;
  const { data: movies } = await axios.get(query);
  return movies;
};

export const searchMovies = async searchParam => {
  const query = `search/movie?api_key=${KEY}&page=1&query=${searchParam}`;
  const { data: movies } = await axios.get(query);
  return movies;
};

export const getMovieDetails = async movieId => {
  const query = `movie/${movieId}$?api_key=${KEY}`;
  const { data: movie } = await axios.get(query);
  return movie;
};

export const getMovieCast = async movieId => {
  const query = `movie/${movieId}/credits?api_key=${KEY}`;
  const { data } = await axios.get(query);
  return data;
};

export const getReviews = async movieId => {
  const query = `movie/${movieId}/reviews?api_key=${KEY}`;
  const { data } = await axios.get(query);
  return data;
};


