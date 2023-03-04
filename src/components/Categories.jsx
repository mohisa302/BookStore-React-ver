import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Categories.module.css';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.categories);
  return (
    <>
      <button
        type="button"
        className={styles.checkBtn}
        onClick={() => dispatch(checkStatus())}
      >
        Check status
      </button>
      <h1>
        {status}
      </h1>
    </>
  );
};
export default Categories;
