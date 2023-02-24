import PropTypes from 'prop-types';
import styles from '../styles/Book.module.css';
import progIcon from '../images/progress.jpg';

const Book = ({ bookProps }) => (
  <div>
    {bookProps.map((book) => (
      <>
        <div className={styles.LessonPanel}>
          <ul className={styles.bookInfo}>
            <li className={styles.genreText}>{book.genre}</li>
            <li className={styles.titleText}>{book.title}</li>
            <li className={styles.SuzanneCollins}>{book.auther}</li>
            <li className={styles.option}>
              <button type="button">
                <pre className={styles.SuzanneCollins}>Comments     |     </pre>
              </button>
              <button type="button">
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
                <span>64%</span>
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
    ))}
  </div>
);

Book.propTypes = {
  bookProps: PropTypes.arrayOf(Array).isRequired,
};
export default Book;
