import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const uid = 'OQo0tm9K5JZRXbAJo9Th';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const initialState = {
  books: [],
};

export const getBook = createAsyncThunk('book/getBook', async () => {
  const response = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OQo0tm9K5JZRXbAJo9Th/books',
  );
  const data = await response.json();
  return data;
});

export const post = createAsyncThunk('book/postBook', async (book) => {
  const response = await fetch(`${url}/apps/${uid}/books`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: Date.now(),
      title: book.title,
      author: book.author,
      category: book.category,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data;
});

export const remove = createAsyncThunk('book/removeBook', async (id) => {
  const response = await fetch(`${url}/apps/${uid}/books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data;
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    postBook: (state, action) => {
      const book = {
        item_id: Date.now(),
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      };
      state.books.push(book);
    },
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== action.payload.id),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBook.fulfilled, (state, action) => {
        const newBooks = Object.entries(action.payload).map((book) => ({
          item_id: book[0],
          ...book[1][0],
        }));

        return { ...state, books: newBooks };
      })
      .addCase(post.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(remove.fulfilled, (state, action) => {
        state.filter((book) => book.item_id !== action.payload);
      });
  },
});

export default bookSlice.reducer;
export const { postBook, removeBook } = bookSlice.actions;
