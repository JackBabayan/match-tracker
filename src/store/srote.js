import { configureStore } from '@reduxjs/toolkit';
import matchReducer from './matchSlice';

const store = configureStore({
  reducer: {
    matches: matchReducer,
  },
});

export default store;
