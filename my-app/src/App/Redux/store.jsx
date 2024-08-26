import { configureStore } from '@reduxjs/toolkit';
import showMoreReducer from './showMoreSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    showMore: showMoreReducer,
    cart: cartReducer,  
  },
});

export default store;