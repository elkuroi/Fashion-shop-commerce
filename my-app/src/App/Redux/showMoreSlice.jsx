import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newArrivals: false,
  topSelling: false,
};

const showMoreSlice = createSlice({
  name: 'showMore',
  initialState,
  reducers: {
    toggleNewArrivals: (state) => {
      state.newArrivals = !state.newArrivals;

      state.topSelling = false;
    },
    toggleTopSelling: (state) => {
      state.topSelling = !state.topSelling;

      state.newArrivals = false;
    },
  },
});

export const { toggleNewArrivals, toggleTopSelling } = showMoreSlice.actions;

export default showMoreSlice.reducer;