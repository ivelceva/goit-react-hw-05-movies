import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { searchMovies } from '../../Fetch.jsx';
import noImg from '..//..//images/No_image.jpg';
import MovieItem from 'components/movieItem/MovieItem';
import css from './Movies.module.css';

const Movies = () => {
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
        window.alert('We do not have such movie');
      }

      history({
        search: `query=${searchMovie}`,
      });
    }
  };

  return (
    <>
      <header>
        <form className={css.searchForm} onSubmit={handleSubmit}>
          <input
            onChange={e => setSearchMovie(e.target.value)}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            value={searchMovie}
            className={css.searchInput}
          />
          <button className={css.searchButton} type="submit">
            &#128269;
          </button>
        </form>
      </header>
      <ul className={css.moviesList}>
        {movies.length > 0 &&
          movies.map(({ id, title, poster_path }) => (
            <MovieItem
              key={id}
              id={id}
              title={title}
              posterPath={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : noImg
              }
              searchParams={searchParams}
            />
          ))}
      </ul>
    </>
  );
};

export default Movies;

// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { searchMovies } from '../../Fetch.jsx';
// import noImg from '..//..//images/No_image.jpg';
// import MovieItem from 'components/movieItem/MovieItem';
// import css from './Movies.module.css';

// const Movies = () => {
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
//         window.alert('We do not have such movie');
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
//       <ul className={css.moviesList}>
//         {movies.length > 0 &&
//           movies.map(({ id, title, poster_path }) => (
//             <MovieItem
//               key={id}
//               id={id}
//               title={title}
//               posterPath={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : noImg}

//               // posterPath={poster_path || noImg} // Use noImg as fallback if poster_path is not available
//               location={location}
//             />
//           ))}
//       </ul>
//     </>
//   );
// };

// export default Movies;

// import { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { searchMovies } from '../../Fetch.jsx';
// import noImg from '..//..//images/No_image.jpg';
// import css from './Movies.module.css';

// export default function Movies() {
// const [searchMovie, setSearchMovie] = useState('');
// const [movies, setMovies] = useState([]);

// const location = useLocation();
// const history = useNavigate();

// useEffect(() => {
//     const searchString = new URLSearchParams(location.search).get('query');

//     if (searchString) {
//         const getMovies = async () => {
//             const { results } = await searchMovies(searchString);

//             setMovies(results);
//             setSearchMovie(searchString);

//         };

//         getMovies();
//     }
// }, [location.search]);

// const handleSubmit = async e => {
//     e.preventDefault();

//     if (searchMovie.trim()) {
//         const { results } = await searchMovies(searchMovie);

//         setMovies(results);
//         setSearchMovie('');

//         if (results.length === 0) {
//             window.alert ('We have not such films');
//         }

//         history({
//             ...location,
//             search: `query=${searchMovie}`,
//         });
//     }
// };

// return (
//   <>
//     <header>
//       <form className={css.searchForm} onSubmit={handleSubmit}>
//         <input
//           onChange={e => setSearchMovie(e.target.value)}
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search movie"
//           value={searchMovie}
//           className={css.searchInput}
//         />
//         <button className={css.searchButton} type="submit">
//           &#128269;
//         </button>
//       </form>
//     </header>
//     <ul className={css.moviesList}>
//       {movies.length > 0 &&
//         movies.map(({ id, title, poster_path }) => (
//           <li className={css.list} key={id} id={id}>
//             <Link className={css.link}
//               to={{
//                 pathname: `/movies/${`${id}`}`,
//                 state: {
//                   from: {
//                     location,
//                   },
//                 },
//               }}
//             >
//               <img
//                 className={css.img}
//                 src={
//                   poster_path
//                     ? `https://image.tmdb.org/t/p/w500${poster_path}`
//                     : noImg
//                 }
//                 alt="poster"
//                 width=""
//                 height=""
//               />
//               <p className={css.movieName}>{title}</p>
//             </Link>
//           </li>
//         ))}
//     </ul>
//   </>
// );
// };

// export default function Movies() {
//   return (
//     <>
//       <h2 className={css.moviesTitle}>Movies</h2>;
//     </>
//   );
// }
