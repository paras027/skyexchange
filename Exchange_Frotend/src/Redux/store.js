// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import LoginSlice from './LoginSlice';
import betsReducer from './betsSlice';
const store = configureStore({
  reducer: {
    LoginSlice: LoginSlice, // Add other slices here
    bets: betsReducer
  },
});

export default store;
