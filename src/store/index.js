import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

const middlewares = [];
const initialState = {};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
  devTools: process.env.NODE_ENV !== 'production',
  initialState,
  enhancers: [],
});

export default store;
