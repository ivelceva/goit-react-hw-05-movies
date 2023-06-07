import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { searchMovies } from '../../Fetch.jsx';
import MovieList from 'components/movieList/MovieList.jsx';
import SearchForm from 'components/searchForm/SearchForm.jsx';

export default function Movies() {
  const [searchMovie, setSearchMovie] = useState('');
  const [movies, setMovies] = useState([]);

  const [searchParams] = useSearchParams();
  const history = useNavigate();

  useEffect(() => {
    const searchString = searchParams.get('query');
    if (searchString) {
      const getMovies = async () => {
        const { results } = await searchMovies(searchString);

        setMovies(results);
        setSearchMovie(searchString);
      };

      getMovies();
    }
  }, [searchParams]);

  const handleSubmit = async () => {
    if (searchMovie.trim()) {
      const { results } = await searchMovies(searchMovie);

      setMovies(results);
      setSearchMovie('');

      if (results.length === 0) {
        window.alert('Sorry, we do not have such movie');
      }

      history({ search: `query=${searchMovie}` });
    }
  };

  return (
    <>
      <header>
        <SearchForm
          handleSubmit={handleSubmit}
          searchMovie={searchMovie}
          setSearchMovie={setSearchMovie}
        />
      </header>
      <MovieList movies={movies} />
    </>
  );
}

