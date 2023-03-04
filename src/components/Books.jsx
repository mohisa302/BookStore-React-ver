import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';
import styles from '../styles/Books.module.css';

const Books = () => {
  const { books } = useSelector((state) => state.books);
  return (
    <>
      <div className={styles.bookContainer}>
        {books.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            category={book.category}
            title={book.title}
            author={book.author}
          />
        ))}
      </div>
      <Form />
    </>
  );
};

export default Books;
