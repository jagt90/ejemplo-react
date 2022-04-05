import { combineReducers } from '@reduxjs/toolkit';

import tesoreriaReducers from './tesoreria/tesoreriaReducers';

const rootReducer = combineReducers({
  tesoreria: tesoreriaReducers,
});

export default rootReducer;
