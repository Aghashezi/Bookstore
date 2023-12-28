// categorySlice.js
import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: { list: [], underConstruction: false },
  reducers: {
    addCategory: (state, action) => {
      state.list.push(action.payload);
    },
    underConstruction: (state) => {
      state.underConstruction = true;
    },
  },
});

export const { addCategory, underConstruction } = categorySlice.actions;
export default categorySlice.reducer;
