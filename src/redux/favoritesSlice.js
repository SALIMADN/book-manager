import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      const book = action.payload;
      const existingBook = state.items.find(item => item.id === book.id);

      if (existingBook) {
        existingBook.quantity += 1;
      } else {
        state.items.push({ ...book, quantity: 1 });
      }
    },
    removeFromFavorites: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const book = state.items.find(item => item.id === action.payload);
      if (book) {
        book.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const book = state.items.find(item => item.id === action.payload);
      if (book && book.quantity > 1) {
        book.quantity -= 1;
      }
    },
  },
});

export const { addToFavorites, removeFromFavorites, incrementQuantity, decrementQuantity } = favoritesSlice.actions;
export default favoritesSlice.reducer;
