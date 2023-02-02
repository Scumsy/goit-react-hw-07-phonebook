import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { add, remove } from './Contacts/contactsSlice';

axios.defaults.baseURL =
  'https://63c2b6acb0c286fbe5f2224d.mockapi.io/phonebook';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get(`/contacts`);

      if (!response.ok) {
        throw new Error('Error');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await axios.delete(`/contacts/${id}`);

      if (!response.ok) {
        throw new Error('Sorry we cant delete your contact');
      }

      dispatch(remove(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async function (data, { rejectWithValue, dispatch }) {
    try {
      const contact = {
        name: data.name,
        phone: data.phone,
      };

      const response = await axios.post(`/contacts/`);

      if (!response.ok) {
        throw new Error('Sorry cant add your contact');
      }

      dispatch(add(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContacts',
//   async (contact, thunkAPI) => {
//     try {
//       const response = await axios.post('/contacts', { contact });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteTask = createAsyncThunk(
//   'contacts/deleteContact',
//   async (taskId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${taskId}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
