import './styles/App.css';
import {
  Routes, Route, Navigate, useLocation,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import NotMatch from './components/NotMatch';
import styles from './styles/bookStoreApp.module.css';
import { asyncLoad } from './redux/api/apiSlice';

const App = () => {
  const dispatch = useDispatch();
  dispatch(asyncLoad());
  const location = useLocation();
  const [mainUrl, setMainUrl] = useState(true);

  useEffect(() => {
    if (location.pathname === '/Books') {
      setMainUrl(true);
    }
    if (location.pathname === '/Categories') {
      setMainUrl(false);
    }
  }, [location]);

  return (
    <div className={styles.pageContainer}>
      <Routes>
        <Route path="/" element={<Navbar path={mainUrl} />}>
          <Route path="/Books" element={<Books />} />
          <Route path="/" element={<Navigate to="/Books" />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
