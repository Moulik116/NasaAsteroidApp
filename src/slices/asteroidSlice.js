import { createSlice } from '@reduxjs/toolkit';

const asteroidSlice = createSlice({
  name: 'asteroid',
  initialState: {
    loading: false,
    asteroidData: null,
    error: null,
  },
  reducers: {
    fetchAsteroidStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchAsteroidSuccess(state, action) {
      state.loading = false;
      state.asteroidData = action.payload;
    },
    fetchAsteroidFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchAsteroidStart,
  fetchAsteroidSuccess,
  fetchAsteroidFailure,
} = asteroidSlice.actions;

export default asteroidSlice.reducer;
