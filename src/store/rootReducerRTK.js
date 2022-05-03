import { combineReducers } from '@reduxjs/toolkit';
import postsApi from '../services/placeholder/posts/postsServiceRTK';

const rootReducer = combineReducers({
  [postsApi.reducerPath]: postsApi.reducer,
});

export default rootReducer;
