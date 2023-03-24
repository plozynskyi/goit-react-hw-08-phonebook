import { createSlice } from '@reduxjs/toolkit';

import { signup, signin, logout, current } from './auth-operations';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      .addCase(signup.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        const { user, token } = payload;
        state.isLoading = false;
        state.user = user;
        state.token = token;
        state.isLogin = true;
      })
      .addCase(signup.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(signin.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signin.fulfilled, (state, { payload }) => {
        const { user, token } = payload;
        state.isLoading = false;
        state.user = user;
        state.token = token;
        state.isLogin = true;
        toast.success(`${user.name} hello!!!`);
      })
      .addCase(signin.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.status;
        toast.error(`Login or password not correct, pleas try again`);
      })
      .addCase(current.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(current.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.isLogin = true;
      })
      .addCase(current.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.token = '';
        state.error = payload;
      })

      .addCase(logout.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = {};
        state.token = '';
        state.isLogin = false;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;

// {
//   error === '400'
//     ?
//     :
// }
