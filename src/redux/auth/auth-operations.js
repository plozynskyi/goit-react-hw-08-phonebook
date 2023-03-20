import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/services/api-auth';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);
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
      const result = await api.signin(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue }, getState) => {
    try {
      const { auth } = getState();
      const data = await api.getCurrent(auth.token);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
