import { Outlet, useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieDetails } from '../../Fetch.jsx';
import Loader from 'components/loader/Loader';
import noImg from '..//..//images/No_image.jpg';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const movieDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await getMovieDetails(movieId);
        setMovie(result);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    movieDetails();
  }, [movieId]);

  const goBack = () => navigate(from || '/');
  // const isCastDetails = location.pathname.includes('cast');
  // const castLink = isCastDetails
  //   ? `/movies/${movieId}`
  //   : `/movies/${movieId}/cast`;
  // const isReviewDetails = location.pathname.includes('reviews');
  // const reviewLink = isReviewDetails
  //   ? `/movies/${movieId}`
  //   : `/movies/${movieId}/reviews`;

  return (
    <div className={css.container}>
      <button className={css.returnBtn} onClick={goBack}>
        Go back
      </button>
      {loading && <Loader />}
      {error && <p>Something went wrong</p>}
      {movie && (
        <div className={css.movieDetails}>
          <div className={css.boxImg}>
            <img
              className={css.img}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : noImg
              }
              alt="poster"
              width=""
              height=""
            />
          </div>
          <div className={css.boxInfo}>
            <h2 className={css.movieTitle}>{movie.title}</h2>
            <p className={css.rating}>
              Rating:{' '}
              <span className={css.voteRating}>
                {`${(movie.vote_average * 10).toFixed(1)}`}%
              </span>
            </p>
            <div className={css.genreContainer}>
              <h3 className={css.genreTag}>Genres:</h3>
              <p className={css.genreName}>{`${movie.genres
                .map(genre => genre.name)
                .join(' / ')}`}</p>
            </div>

            <h3 className={css.overviewTag}>Overview</h3>
            <p className={css.movieOverview}>{`${movie.overview}`}</p>

            <div className={css.boxAddInfo}>
              {/* <Link
                className={css.castLink}
                state={{ from }}
                to={castLink}
                replace
              >
                Cast
              </Link>
              <Link
                className={css.reviewLink}
                state={{ from }}
                const
                to={reviewLink}
                replace
              >
                Reviews
              </Link> */}

              <Link
                className={css.castLink}
                state={{ from }}
                to="cast"
                replace
              >
                Cast
              </Link>
              <Link
                className={css.reviewLink}
                state={{ from }}
                to="reviews"
                replace
              >
                Reviews
              </Link>
            </div>
          </div>
        </div>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
