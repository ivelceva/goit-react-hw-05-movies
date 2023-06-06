import React from 'react';
import css from './SearchForm.module.css';

export default function SearchForm({
  handleSubmit,
  searchMovie,
  setSearchMovie,
}) {
  return (
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
  );
}
