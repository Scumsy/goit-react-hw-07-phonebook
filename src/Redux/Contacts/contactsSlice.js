import { createSlice } from '@reduxjs/toolkit';
import { initialState } from 'Redux/store';
import { fetchContacts, addContacts, deleteContacts } from 'Redux/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
  reducers: {
    setFilter: (state, action) => {
      state.contacts.filter.value = action.payload;
    },
    add: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    remove: (state, action) => {
      return state.contacts.items.filter(item => item.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, (state, _) => {
      state.contacts.isLoading = true;
      // state.error = '';
    });

    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = action.payload;
    });

    builder.addCase(deleteContacts.pending, (state, _) => {
      state.isDeleting = true;
    });

    builder.addCase(deleteContacts.fulfilled, (state, _) => {
      state.isDeleting = false;
    });

    // builder.addCase(deleteContacts.rejected, () => setError);

    builder.addCase(addContacts.pending, (state, _) => {
      state.isLoading = true;
      state.isAdd = true;
    });

    builder.addCase(addContacts.fulfilled, (state, _) => {
      state.isLoading = false;
      state.isAdd = false;
    });

    // builder.addCase(addContacts.rejected, () => setError);
  },
});

export const { add, remove } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
// export default contactsSlice.reducer;
