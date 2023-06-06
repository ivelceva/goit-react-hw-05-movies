import React from 'react';
import { Link } from 'react-router-dom';
import noImg from '..//..//images/No_image.jpg';
import css from './MovieList.module.css';

export default function MovieList({ movies, location }) {
  return (
    <ul className={css.moviesList}>
      {movies.length > 0 &&
        movies.map(({ id, title, poster_path }) => (
          <li className={css.list} key={id} id={id}>
            <Link
              className={css.link}
              to={{
                pathname: `/movies/${id}`,
                state: {
                  from: {
                    location,
                  },
                },
              }}
            >
              <img
                className={css.img}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : noImg
                }
                alt="poster"
                width=""
                height=""
              />
              <p className={css.movieName}>{title}</p>
            </Link>
          </li>
        ))}
    </ul>
  );
}
