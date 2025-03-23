import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: null,
    token: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { payload } = action;
      localStorage.setItem('user', JSON.stringify(payload));
      state.username = payload.username;
      state.token = payload.token;
    },
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
