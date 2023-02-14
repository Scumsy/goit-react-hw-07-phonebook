import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://63c2b6acb0c286fbe5f2224d.mockapi.io/phonebook';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get(`/contacts`);

      if (response.statusText !== 'OK') {
        throw new Error('Error');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async function (id, { rejectWithValue }) {
    try {
      const response = await axios.delete(`/contacts/${id}`);

      if (response.statusText !== 'OK') {
        throw new Error('Sorry we cant delete your contact');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async function (data, { rejectWithValue }) {
    try {
      const contact = {
        name: data.name,
        phone: data.phone,
      };

      const response = await axios.post(`/contacts/`, contact);

      data.id = response.data.id;

      if (response.status !== 201) {
        throw new Error('Sorry cant add your contact');
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
