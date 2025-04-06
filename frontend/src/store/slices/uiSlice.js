import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    activeChannelId: '1',
  },
  reducers: {
    toggleChannel: (state, action) => {
      const { payload } = action;
      state.activeChannelId = payload;
    },
  },
});

export const { toggleChannel } = uiSlice.actions;
export default uiSlice.reducer;
