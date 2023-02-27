import { configureStore } from "@reduxjs/toolkit";
import booksSlice from './books/booksSlice';
import categoriesReducer from "./categories/categoriesSlice";

export const store = configureStore({
    reducer: {
        books: booksSlice,
        categories: categoriesReducer,
    }
})
