// store.js

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './users/slice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Agrega más reducers aquí si es necesario
  },
});

export default store;