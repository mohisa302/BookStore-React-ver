const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = {
  books: [],
};

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const addedBook = (book) => ({
  type: ADD_BOOK,
  book,
});

const bookReducer = (state = initialState, action) => {
  if (action.type === 'ADD_BOOK') { return [...state, action.book]; }
  if (action.type === 'REMOVE_BOOK') { return state.filter((book) => book.id !== action.id); }
  return state;
};

export default bookReducer;
