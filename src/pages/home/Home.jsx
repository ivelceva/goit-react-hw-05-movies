import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../Fetch.jsx';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';

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
      <h1>Tranding today</h1>
      <ul>
        {movies &&
          movies.map(({ id, title, poster_path }) => (
            <li className={css.link} key={id} id={id}>
              <Link
                to={{
                  pathname: `/movies/${`${id}`}`,
                  state: {
                    from: {
                      location,
                      label: 'Back to Home',
                    },
                  },
                }}
              >
                {/* <img
                  className={css.img}
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : noImg
                  }
                  alt="poster"
                  width=""
                  height=""
                /> */}
                <p>{title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
