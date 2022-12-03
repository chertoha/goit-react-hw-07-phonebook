// import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const initialContacts = {
//   list: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     { id: 'id-5', name: 'Anton Chertok', number: '333-22-33' },
//     { id: 'id-6', name: 'Arnie Shwarz', number: '777-55-22' },
//     { id: 'id-7', name: 'Anteres Movepack', number: '222-56-33' },
//     { id: 'id-8', name: 'HerZonf Plussel', number: '220-56-33' },
//     { id: 'id-9', name: 'Romania Clevlend', number: '225-56-33' },
//   ],
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialContacts,
//   reducers: {
//     addContact: {
//       reducer: (state, action) => {
//         state.list.push(action.payload);
//       },
//       prepare: (name, number) => {
//         return {
//           payload: {
//             id: nanoid(),
//             name: name,
//             number: number,
//           },
//         };
//       },
//     },
//     deleteContact: (state, action) => {
//       state.list = state.list.filter(({ id }) => id !== action.payload);
//     },
//   },
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const contactsPersistedReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

// export const { addContact, deleteContact } = contactsSlice.actions;

// export const getContactsList = state => state.contacts.list;
