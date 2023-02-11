import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './Contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    contactsSlice,
  },
});
