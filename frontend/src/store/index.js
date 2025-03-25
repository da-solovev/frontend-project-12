import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice.js';
import { channelsApi } from './slices/channelsApi.js';

export default configureStore({
  reducer: {
    auth: authSlice,
    [channelsApi.reducerPath]: channelsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(channelsApi.middleware),
});
