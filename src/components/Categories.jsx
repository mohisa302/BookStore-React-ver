import { useDispatch } from 'react-redux';
import styles from '../styles/Categories.module.css';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className={styles.checkBtn}
      onClick={() => dispatch(checkStatus())}
    >
      Check status
    </button>
  );
};
export default Categories;
