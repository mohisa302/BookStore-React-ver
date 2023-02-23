import { Link, Outlet } from 'react-router-dom';

const Navbar = () => (
  <>
    <header>
      <h1>Bookstore</h1>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home |&nbsp;</Link>
          </li>
        </ul>
      </nav>
    </header>
    <Outlet />
  </>
);

export default Navbar;
