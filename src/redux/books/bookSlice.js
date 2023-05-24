import { createSlice } from '@reduxjs/toolkit';
import ShowBooks from '../../ShowBooks';

const initialState = {
  bookItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      const itemId = action.payload;
      state.bookItems = state.bookItems.filter((item) => item.id !== itemId);
    },
  },
});

export const { removeBook } = bookSlice.actions;

export default bookSlice.reducer;
