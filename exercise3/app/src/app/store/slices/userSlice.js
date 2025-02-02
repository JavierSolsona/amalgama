import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: undefined
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = undefined;
    }
  }
});

export const { setToken, removeToken } = userSlice.actions;

export default userSlice.reducer;
