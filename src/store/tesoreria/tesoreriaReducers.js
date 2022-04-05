import { combineReducers } from '@reduxjs/toolkit';

import gastosReducer from './gastos/gastosReducer';

export default combineReducers({
  gastos: gastosReducer,
});
