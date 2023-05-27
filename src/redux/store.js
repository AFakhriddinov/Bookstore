import { configureStore } from '@reduxjs/toolkit';
import booksReducer from "./books/bookSlice"; //eslint-disable-line
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
