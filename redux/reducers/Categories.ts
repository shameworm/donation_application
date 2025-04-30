import {createSlice} from '@reduxjs/toolkit';

import {categories} from './__mocks__/categories-mock';

const initialState = {
  categories: categories,
  selectedCategoryId: 1,
};

const Categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    updateSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
    resetCategories: () => {
      return initialState;
    },
  },
});

export const {resetCategories, updateSelectedCategoryId} = Categories.actions;
export default Categories.reducer;
