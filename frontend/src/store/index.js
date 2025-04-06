import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice.js';
import uiSlice from './slices/uiSlice.js';
import { channelsApi } from '../api/channelsApi.js';
import { messagesApi } from '../api/messagesApi.js';

export default configureStore({
  reducer: {
    auth: authSlice,
    ui: uiSlice,
    [channelsApi.reducerPath]: channelsApi.reducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(channelsApi.middleware),
});
