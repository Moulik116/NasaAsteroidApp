import { configureStore } from '@reduxjs/toolkit';
import asteroidReducer from './slices/asteroidSlice';

export const store = configureStore({
  reducer: {
    asteroid: asteroidReducer,
  },
});
