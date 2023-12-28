// store.js
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '..Redux/bookSlice';
import categoryReducer from './categorySlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
});

export default store;
