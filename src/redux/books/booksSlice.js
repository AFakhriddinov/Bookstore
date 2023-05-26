import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiKey = 'uRddr6OSr0tnEmWTsb26';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}`;

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    await axios.post(`${url}/books`, book);
  } catch (error) {
    throw new Error(error);
  }
  return book;
});

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const resp = await axios.get(`${url}/books`);
    const books = Object.entries(resp.data).map((item) => ({
      ...item[1][0],
      item_id: item[0],
    }));
    return books;
  } catch (error) {
    throw new Error(error);
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  try {
    await axios.delete(`${url}/books/${id}`);
  } catch (error) {
    throw new Error(error);
  }
  return id;
});

const initialState = {
  books: [],
  loading: false,
  error: undefined,
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const id = action.payload;
        const index = state.books.findIndex((book) => book.item_id === id);
        if (index !== -1) {
          state.books.splice(index, 1);
        }
      })
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.loading = false;
        state.error = undefined;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default bookSlice.reducer;
