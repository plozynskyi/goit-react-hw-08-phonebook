import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import * as api from '../../shared/services/api-contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
  {
    condition: ({ name, phone }, { getState }) => {
      const { contacts } = getState();
      const normalizedTitle = name.toLowerCase();
      const normalizedAuthor = phone.toLowerCase();
      const result = contacts.items.find(({ name, phone }) => {
        return (
          name.toLowerCase() === normalizedTitle &&
          phone.toLowerCase() === normalizedAuthor
        );
      });
      if (result) {
        toast.warn(`${name} is already ixist on phonebook`);
        return false;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
