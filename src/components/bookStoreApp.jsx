import { Routes, Route, Navigate } from 'react-router-dom';
import Books from './Books';
import Categories from './Categories';
import Navbar from './Navbar';
import NotMatch from './NotMatch';
import styles from '../styles/bookStoreApp.module.css';

const BookStoreApp = () => (
  <div className={styles.pageContainer}>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/Books" element={<Books />} />
        <Route path="/" element={<Navigate to="/Books" />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  </div>
);
export default BookStoreApp;
