import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = [
    {
      title: 'Book 1',
      auther: 'aut 1',
      genre: 'Action',
      id: uuidv4(),
    },
    {
      title: 'Book 2',
      auther: 'aut 2',
      genre: 'Action',
      id: uuidv4(),
    },
    {
      title: 'Book 3',
      auther: 'aut 3',
      genre: 'Action',
      id: uuidv4(),
    },
  ];

  return (
    <>
      <Book key={books.id} bookProps={books} />
      <Form />
    </>
  );
};

export default Books;
