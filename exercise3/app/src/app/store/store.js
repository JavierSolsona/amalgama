import { configureStore } from '@reduxjs/toolkit';

import userReducer from '@/app/store/slices/userSlice';


export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
