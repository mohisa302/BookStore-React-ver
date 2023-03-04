import { useDispatch } from 'react-redux';
import styles from '../styles/Book.module.css';
import progIcon from '../images/progress.jpg';
import { asyncRemove } from '../redux/api/apiSlice';

const Book = (book) => {
  const dispatch = useDispatch();

  const {
    category,
    title,
    author,
    id,
  } = book;

  const handleRemove = async (id) => {
    dispatch(
      asyncRemove({
        item_id: id,
      }),
    );
  };
  return (
    <>
      <div className={styles.LessonPanel}>
        <ul className={styles.bookInfo}>
          <li className={styles.genreText}>
            {category}
          </li>
          <li className={styles.titleText}>
            {title}
          </li>
          <li className={styles.SuzanneCollins}>
            {author}
          </li>
          <li className={styles.option}>
            <button type="button">
              <pre className={styles.SuzanneCollins}>Comments     |     </pre>
            </button>
            <button
              type="button"
              onClick={() => handleRemove(id)}
            >
              <pre className={styles.SuzanneCollins}>Remove       |     </pre>
            </button>
            <button type="button">
              <pre className={styles.SuzanneCollins}>Edit</pre>
            </button>
          </li>
        </ul>
        <div className={styles.progcontainer}>
          <div className={styles.progress}>
            <img className={styles.oval2} src={progIcon} alt="progress icon" />
            <ul className={styles.progressTest}>
              <span>{title}</span>
              <span>Completed</span>
            </ul>
          </div>
          <ul className={styles.bookInfo2}>
            <li className={styles.chapter}>CURRENT CHAPTER</li>
            <li>Chapter 3</li>
            <li>
              <button className={styles.updateBtn} type="button">UPDATE PROGRESS</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Book;
