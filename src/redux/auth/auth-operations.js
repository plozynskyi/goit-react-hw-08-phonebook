import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/services/api-auth';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.signup(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const signin = createAsyncThunk(
  'auth/signin',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.signin(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
