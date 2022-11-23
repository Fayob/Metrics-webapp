/* eslint-disable no-param-reassign */
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

export const covidData = createAsyncThunk('metrics/worldData', async (target, thunk) => {
  const options = {
    method: 'GET',
    url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/${target}`,
    headers: {
      'X-RapidAPI-Key': '01efd1547emsh1053313b758aa52p1fdc72jsna43cc5316626',
      'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(thunk.rejectWithValue(error.message.payload));
    return thunk.rejectWithValue(error.message);
  }
});

export const globalData = createAsyncThunk('metrics/globalData', async (_, thunk) => {
  const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world',
    headers: {
      'X-RapidAPI-Key': '01efd1547emsh1053313b758aa52p1fdc72jsna43cc5316626',
      'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return thunk.rejectWithValue(error.message);
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

const initialState = {
  isLoading: false,
  worldCovid: [],
  covid19Data: [],
  error: '',
};

const metricsSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => action.payload);
    builder.addCase(getData.rejected, (state, action) => action.payload);
    builder.addCase(covidData.fulfilled, (state, action) => {
      state.covid19Data = action.payload;
    });
    builder.addCase(covidData.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(globalData.fulfilled, (state, action) => {
      state.worldCovid = action.payload;
    });
    builder.addCase(globalData.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { setIsLoading } = metricsSlice.actions;
export default metricsSlice.reducer;
