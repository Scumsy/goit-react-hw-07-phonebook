import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
import {
  contactsReducer,
  contactsSlice,
} from '../Redux/Contacts/contactsSlice';
import { filtersReducer } from './Filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});

// export const initialState = {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   filter: '',
// };

// export const setError = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// - OLD version of Store!!!!
// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { filtersReducer } from './filterSlice';
// import { contactsReducer } from './contactsSlice';

// const rootReducer = combineReducers({
//   filter: filtersReducer,
//   contacts: contactsReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
