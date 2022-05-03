import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { placholderMiddleware } from '../services/placeholder/placeholderApiRTK';
import rootReducer from './rootReducerRTK';

const middleware = [...placholderMiddleware];
const initialState = {};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
  devTools: process.env.NODE_ENV !== 'production',
  initialState,
  enhancers: [],
});

setupListeners(store.dispatch);

export default store;
