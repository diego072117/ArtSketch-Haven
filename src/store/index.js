// store.js

import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/slice';

const store = configureStore({
  reducer: {
    products: productsReducer, 
  },
});

export default store;
