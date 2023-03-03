import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';
import stateReducer from './state/StateSlice';

const store = configureStore({
  reducer: {
    books: booksSlice,
    categories: categoriesReducer,
    state: stateReducer,
  },
});

export default store;
