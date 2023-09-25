// store.js

import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/slice';
import authReducer from './users/slice';

const store = configureStore({
  reducer: {
    products: productsReducer, 
    auth: authReducer,
  },
});

export default store;
