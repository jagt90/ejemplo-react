import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getGastos } from '../../../services/adsis/tesoreria/gastos/gastosService';

const initialState = {
  data: [],
  loading: false,
  failed: false,
};

export const fetchGastos = createAsyncThunk('tesoreria/gastos/fetchGastos', async (params, thunkApi) => {
  const { data } = await getGastos(params);

  return data;
});

const gastosSlice = createSlice({
  name: 'gastos',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGastos.pending]: (state) => {
      state.loading = true;
      state.failed = false;
    },
    [fetchGastos.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.failed = false;
    },
    [fetchGastos.rejected]: (state) => {
      state.loading = false;
      state.failed = true;
    },
  },
});

export default gastosSlice.reducer;
