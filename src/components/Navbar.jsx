import { Link, Outlet } from 'react-router-dom';
import Books from './Books';
import userIcon from '../images/usericon.png';
import Categories from './Categories';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <>
    <nav className={styles.panelbg}>
      <div className={styles.BookstoreCMS}>
        Bookstore CMS
      </div>
      <div>
        <Link to="/Books">
          <Books />
        </Link>
      </div>
      <div>
        <Link to="/Categories">
          <Categories />
        </Link>
      </div>
      <div>
        <img alt="userIcon" src={userIcon} className={styles.icon} />
      </div>
    </nav>
    <Outlet />
  </>
);

export default Navbar;
