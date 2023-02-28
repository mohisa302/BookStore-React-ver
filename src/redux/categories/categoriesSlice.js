const STATUS = 'STATUS';

const initialState = {
  status: [],
};

export const cateSlice = () => ({
  type: STATUS,
});

const categoriesReducer = (state = initialState, action) => {
  if (action.type === 'STATUS') {
    return [...state.categories, 'Under construction'];
  }
  return state;
};

export default categoriesReducer;
