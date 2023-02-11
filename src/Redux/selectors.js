export const selectContacts = state => state.contactsSlice.contacts.items;
export const selectFilter = state => state.contactsSlice.contacts.filter.value;
export const selectLoadingStatus = state => state.contactsSlice.isLoading;
export const selectError = state => state.contactsSlice.error;
