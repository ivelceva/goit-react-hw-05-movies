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

  const handleSubmit = async e => {
    e.preventDefault();

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

// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { searchMovies } from '../../Fetch.jsx';
// import MovieList from 'components/movieList/MovieList.jsx';
// import SearchForm from 'components/searchForm/SearchForm.jsx';

// export default function Movies() {
//   const [searchMovie, setSearchMovie] = useState('');
//   const [movies, setMovies] = useState([]);

//   const location = useLocation();
//   const history = useNavigate();

//   useEffect(() => {
//     const searchString = new URLSearchParams(location.search).get('query');

//     if (searchString) {
//       const getMovies = async () => {
//         const { results } = await searchMovies(searchString);

//         setMovies(results);
//         setSearchMovie(searchString);
//       };

//       getMovies();
//     }
//   }, [location.search]);

//   const handleSubmit = async e => {
//     e.preventDefault();

//     if (searchMovie.trim()) {
//       const { results } = await searchMovies(searchMovie);

//       setMovies(results);
//       setSearchMovie('');

//       if (results.length === 0) {
//         window.alert('We do not have such films');
//       }

//       history({
//         ...location,
//         search: `query=${searchMovie}`,
//       });
//     }
//   };

//   return (
//     <>
//       <header>
//         <SearchForm
//           handleSubmit={handleSubmit}
//           searchMovie={searchMovie}
//           setSearchMovie={setSearchMovie}
//         />
//       </header>
//       <MovieList movies={movies} location={location} />
//     </>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { searchMovies } from '../../Fetch.jsx';
// //import noImg from '..//..//images/No_image.jpg';
// import css from './Movies.module.css';
// import MovieList from 'components/movieList/MovieList.jsx';

// export default function Movies() {
//   const [searchMovie, setSearchMovie] = useState('');
//   const [movies, setMovies] = useState([]);

//   const location = useLocation();
//   const history = useNavigate();

//   useEffect(() => {
//     const searchString = new URLSearchParams(location.search).get('query');

//     if (searchString) {
//       const getMovies = async () => {
//         const { results } = await searchMovies(searchString);

//         setMovies(results);
//         setSearchMovie(searchString);
//       };

//       getMovies();
//     }
//   }, [location.search]);

//   const handleSubmit = async e => {
//     e.preventDefault();

//     if (searchMovie.trim()) {
//       const { results } = await searchMovies(searchMovie);

//       setMovies(results);
//       setSearchMovie('');

//       if (results.length === 0) {
//         window.alert('We do not have such films');
//       }

//       history({
//         ...location,
//         search: `query=${searchMovie}`,
//       });
//     }
//   };

//   return (
//     <>
//       <header>
//         <form className={css.searchForm} onSubmit={handleSubmit}>
//           <input
//             onChange={e => setSearchMovie(e.target.value)}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search movie"
//             value={searchMovie}
//             className={css.searchInput}
//           />
//           <button className={css.searchButton} type="submit">
//             &#128269;
//           </button>
//         </form>
//       </header>
//       <MovieList movies={movies} location={location} />
//     </>
//   );
// }
