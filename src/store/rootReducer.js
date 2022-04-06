import { combineReducers } from '@reduxjs/toolkit';

import gastosReducer from './tesoreria/gastos/gastosReducer';

const rootReducer = combineReducers({
  gastos: gastosReducer,
});

export default rootReducer;
