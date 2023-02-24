import { Link, Outlet } from 'react-router-dom';
import userIcon from '../images/usericon.png';
import styles from '../styles/Navbar.module.css';
import navbarstyles from '../styles/Books.module.css';

const Navbar = () => (
  <>
    <nav className={styles.panelbg}>
      <div className={styles.BookstoreCMS}>
        Bookstore CMS
      </div>
      <div>
        <Link className={navbarstyles.BOOKS} to="/Books">
          Books
        </Link>
      </div>
      <div>
        <Link className={navbarstyles.BOOKS} to="/Categories">
          Categories
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
