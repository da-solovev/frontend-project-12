import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { payload } = action;
      state.user = payload.user;
      state.token = payload.token;
    },
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
