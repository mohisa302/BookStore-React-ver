import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [],
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        add: (state, action) => {
            state.books.push(action.payload)
        },
        remove: (state, action) => {
            state.books.slice(state.books.indexOf(action.payload), 1)
        },
    }
});

export const { increment, decrement } = booksSlice.actions;
export default booksSlice.reducer;