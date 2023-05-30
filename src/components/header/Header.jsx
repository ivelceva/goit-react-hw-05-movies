import { Link, Outlet } from 'react-router-dom';
import css from './Header.module.css';

export default function Header() {
  return (
    <>
      <div className={css.container}>
        <nav className={css.header}>
          <Link className={css.navBtn} to="/">Home</Link>
          <Link className={css.navBtn} to="/movies">Movies</Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
