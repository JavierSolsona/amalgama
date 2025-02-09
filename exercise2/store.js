import { configureStore, createSlice } from '@reduxjs/toolkit';

const authorsSlice = createSlice({
  name: 'authors',
  initialState: [],
  reducers: {
    setAuthors: (state, action) => {
        return action.payload;
    },
  },
});

export const { setAuthors } = authorsSlice.actions;

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    setBooks: (state, action) => {
        return action.payload;
    },
  },
});

export const { setBooks } = booksSlice.actions;

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers: (state, action) => {
        return action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;

const store = configureStore({
  reducer: {
    authors: authorsSlice.reducer,
    books: booksSlice.reducer,
    users: usersSlice.reducer
  },
});

export default store;