import { useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from '../styles/Book.module.css';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const [state, setState] = useState({
    booktitle: '',
    auther: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    dispatch(addBook(state));
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h3 className={styles.Formtitle}>
        ADD NEW BOOK
      </h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <label htmlFor="booktitle">
            <input
              placeholder="Book title"
              name="booktitle"
              className={styles.formInput}
              type="text"
              value={state.booktitle}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="auther">
            <input
              className={styles.formInput2}
              placeholder="Auther"
              name="auther"
              type="text"
              value={state.auther}
              onChange={handleChange}
            />
          </label>
          <button
            type="button"
            className={styles.addBtn}
            onClick={handleSubmit}
          >
            Add book
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
