import { Outlet, NavLink } from 'react-router-dom';
import stls from './Layout.module.css';

const Layout = () => (
  <>
    <header>
      <nav>
        <ul className={stls.navList}>
          <li className={stls.navItem}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={stls.navItem}>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
