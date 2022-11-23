import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://coronavirus.m.pipedream.net';

export const getData = createAsyncThunk('metrics/getData', async (_, thunk) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return thunk.rejectWithValue(error.response.data);
  }
});

export const countriesTotal = (newMetrics, inc) => (
  newMetrics && newMetrics.reduce((total, curr) => {
    if (curr.Country_Region === inc) {
      return total + +curr.Confirmed;
    }
    return total;
  }, 0)
);

const metricsSlice = createSlice({
  name: 'metrics',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => action.payload);
    builder.addCase(getData.rejected, (state, action) => action.payload);
  },
});

export default metricsSlice.reducer;
