import { configureStore } from '@reduxjs/toolkit';

import persistedReducer from './root-reducer';

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
