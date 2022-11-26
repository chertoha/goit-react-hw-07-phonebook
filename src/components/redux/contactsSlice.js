import { createSlice, nanoid } from '@reduxjs/toolkit';
import { LocalStorageApi } from 'services/StorageApi';

//
// import { initialContacts } from 'utils/initialContacts';
// localStorage.setItem('contacts', JSON.stringify(initialContacts));
//

//TEMPORARY (NO PERSIST)
const storageContacts = new LocalStorageApi('contacts');
const initialState = storageContacts.get() || [];
//TEMPORARY (NO PERSIST)

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (name, number) => {
        return {
          payload: {
            id: nanoid(),
            name: name,
            number: number,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice;
