import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => (
  <>
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <Outlet />
  </>
);

export default Layout;
