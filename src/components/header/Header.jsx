import { Link, Outlet } from 'react-router-dom';
import css from './Header.module.css';

export default function Header() {
  return (
    <div className={css.container}>
      <nav className={css.header}>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Outlet />
    </div>
  );
}
