import { Link, Outlet } from 'react-router-dom';
import css from './Header.module.css';

export default function Header() {
  return (
    <>
      <div className={css.container}>
        <nav className={css.header}>
          <h1 className={css.title}>Blockbuster</h1>
          <div className={css.btnWrap}>
            <Link className={css.navBtn} to="/">
              Home
            </Link>
            <Link className={css.navBtn} to="/movies">
              Movies
            </Link>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
