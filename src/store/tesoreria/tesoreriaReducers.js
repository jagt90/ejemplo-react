import { combineReducers } from '@reduxjs/toolkit';

import gastosSlice from './gastos/gastosReducer';

export default combineReducers({
  gastos: gastosSlice,
});
