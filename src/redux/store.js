import { configureStore } from '@reduxjs/toolkit';
import metricsReducer from './metrics/metricsRedux';

export default configureStore({
  reducer: {
    metrics: metricsReducer,
  },
});
