import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItems: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookItems = [
        ...state.bookItems,
        {
          id: Date.now(),
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    },
    removeBook: (state, action) => {
      const itemId = action.id;
      state.bookItems = state.bookItems.filter((item) => item.id !== itemId);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
