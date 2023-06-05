import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../Fetch.jsx';
import { useLocation } from 'react-router-dom';
import MovieItem from 'components/movieItem/MovieItem.jsx';
import css from './Home.module.css';

const Home = () => {
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
      <ul className={css.homeList}>
        {movies.length > 0 &&
          movies.map(({ id, title, poster_path }) => (
            <MovieItem
              key={id}
              id={id}
              title={title}
              poster_path={poster_path}
              location={location}
            />
          ))}
      </ul>
    </div>
  );
};

export default Home;

// import { useState, useEffect } from 'react';
// import { getTrendingMovies } from '../../Fetch.jsx';
// import { Link, useLocation } from 'react-router-dom';
// import noImg from "..//..//images/No_image.jpg";
// import css from './Home.module.css';

// export default function Home() {
//   const location = useLocation();
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const getMovies = async () => {
//       const { results } = await getTrendingMovies();

//       setMovies(results);
//     };

//     getMovies();
//   }, []);
//   return (
//     <div>
//       <h1 className={css.homeTitle}>Tranding today</h1>
//       <ul className={css.homeList}>
//         {movies.length > 0 &&
//           movies.map(({ id, title, poster_path }) => (
//             <li className={css.list} key={id} id={id}>
//               <Link className={css.link}
//                 to={{
//                   pathname: `/movies/${`${id}`}`,
//                   state: {
//                     from: {
//                       location,
//                       label: 'Back to Home',
//                     },
//                   },
//                 }}
//               >
//                 <img
//                   className={css.img}
//                   src={
//                     poster_path
//                       ? `https://image.tmdb.org/t/p/w500${poster_path}`
//                       : noImg
//                   }
//                   alt="poster"
//                   width=""
//                   height=""
//                 />
//                 <p className={css.movieName}>{title}</p>
//               </Link>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }
