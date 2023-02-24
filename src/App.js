import './styles/App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import NotMatch from './components/NotMatch';
import styles from './styles/bookStoreApp.module.css';

const App = () => (
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
export default App;
