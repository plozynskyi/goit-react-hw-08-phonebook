import { createSlice } from '@reduxjs/toolkit';

import { signup, signin, current } from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(signup.fulfilled, (store, { payload }) => {
        const { user, token } = payload;
        store.isLoading = false;
        store.user = user;
        store.token = token;
        store.isLogin = true;
      })
      .addCase(signup.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(signin.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(signin.fulfilled, (store, { payload }) => {
        const { user, token } = payload;
        store.isLoading = false;
        store.user = user;
        store.token = token;
        store.isLogin = true;
      })
      .addCase(signin.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(current.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(current.fulfilled, (store, { payload }) => {
        const { user, token } = payload;
        store.isLoading = false;
        store.user = user;
        store.token = token;
        store.isLogin = true;
      })
      .addCase(current.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export default authSlice.reducer;
