import { createSlice } from '@reduxjs/toolkit';
import { initialState } from 'Redux/initialState';
import { fetchContacts, addContacts, deleteContacts } from 'Redux/operations';

const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.contacts.filter.value = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, (state, _) => {
      state.isLoading = true;
      state.error = '';
    });

    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contacts.items = action.payload;
    });

    builder.addCase(fetchContacts.rejected, handleError);

    builder.addCase(deleteContacts.pending, (state, _) => {});

    builder.addCase(deleteContacts.fulfilled, (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        item => item.id !== action.payload.id
      );
    });

    builder.addCase(deleteContacts.rejected, handleError);

    builder.addCase(addContacts.pending, (state, _) => {
      state.isLoading = true;
    });

    builder.addCase(addContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contacts.items.push(action.payload);
    });

    builder.addCase(addContacts.rejected, handleError);
  },
});

export const { setFilter, setContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
