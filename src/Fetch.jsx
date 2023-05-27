import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'b889b1f15800992b1379ee4939d9484c';

export const getTrendingMovies = async () => {
  const query = `trending/movie/day?api_key=${KEY}`;
  const { data: movies } = await axios.get(query);
  return movies;
};


