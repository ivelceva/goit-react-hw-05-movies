import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../Fetch.jsx';
import { useLocation } from 'react-router-dom';
import css from './Home.module.css';
import MovieList from 'components/movieList/MovieList.jsx';

export default function Home() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const { results } = await getTrendingMovies();

      setMovies(results);
    };

    getMovies();
  }, []);

  return (
    <div>
      <h1 className={css.homeTitle}>Trending today</h1>
      <MovieList movies={movies} location={location} />
    </div>
  );
}

