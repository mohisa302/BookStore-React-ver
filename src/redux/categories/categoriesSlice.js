import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: [],
}

export const cateSlice = () => ({
    type: STATUS,
});
  
const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case STATUS:
        return { status: ' ' };
      default:
        return state;
    }
  };

export default categoriesReducer;
