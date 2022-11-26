import React, { useState, useEffect } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Box from '../Box';
// import { initialContacts } from 'utils/initialContacts';
// import FormikForm from 'components/FormikForm/FormikForm';
import { LocalStorageApi } from 'services/StorageApi';
import { useSelector } from 'react-redux';

// localStorage.setItem('contacts', JSON.stringify(initialContacts));
// const storageContacts = new LocalStorageApi('contacts');

const App = () => {
  // const contacts = useSelector(state => state.contacts);

  // const [contacts, setContacts] = useState(() => storageContacts.get() || []);
  // let contacts = useSelector(state => state.contacts);

  // if (contacts.length === 0) {
  //   contacts = storageContacts.get() || [];
  //   console.log(contacts);
  // }

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   storageContacts.update(contacts);
  // }, [contacts]);

  // const onFilterChange = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const onDelete = id => {
  //   // setContacts(prevContacts => prevContacts.filter(c => c.id !== id));
  //   dispatch(deleteContact(id));
  // };

  // const onSubmit = newContact => {
  //   // setContacts(prevContacts => {
  //   //   if (prevContacts.find(c => c.name === newContact.name)) {
  //   //     alert(`${newContact.name} is already in contact list`);
  //   //     return prevContacts;
  //   //   }
  //   //   return [...prevContacts, newContact];
  //   // });
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  return (
    <Box pt={5} pl={7}>
      <h1>Phone book</h1>
      {/* <ContactForm onSubmit={onSubmit} /> */}
      <ContactForm />
      {/* <FormikForm onSubmit={onSubmit} /> */}

      <h2>Contacts</h2>
      {/* <Filter value={filter} onChange={onFilterChange} /> */}
      <Filter />

      {/* {contacts.length > 0 ? (
        // <ContactList contacts={getVisibleContacts()} onDelete={onDelete} />
        <ContactList />
      ) : (
        <p>There are no contacts yet here</p>
      )} */}
      <ContactList />
    </Box>
  );
};

export default App;
