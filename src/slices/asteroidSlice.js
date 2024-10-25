import { createSlice } from '@reduxjs/toolkit';

const asteroidSlice = createSlice({
  name: 'asteroid',
  initialState: {
    info: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchAsteroidStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchAsteroidSuccess(state, action) {
      state.loading = false;
      state.info = action.payload;
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
