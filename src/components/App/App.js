import React from 'react';
// import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Box from '../Box';
import { initialContacts } from 'utils/initialContacts';
import FormikForm from 'components/FormikForm/FormikForm';
import { LocalStorageApi } from 'services/StorageApi';

localStorage.setItem('contacts', JSON.stringify(initialContacts));

class App extends React.Component {
  //hooks
  state = {
    contacts: [],
    filter: '',
  };

  storageContacts = new LocalStorageApi('contacts');

  componentDidMount() {
    const initContacts = this.storageContacts.get();
    if (initContacts) {
      this.setState({ contacts: initContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      this.storageContacts.update(this.state.contacts);
    }
  }

  onFilterChange = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  onSubmit = newContact => {
    this.setState(({ contacts }) => {
      if (contacts.find(c => c.name === newContact.name)) {
        alert(`${newContact.name} is already in contact list`);
        return;
      }

      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  onDelete = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(c => c.id !== id),
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter, contacts } = this.state;

    return (
      <Box pt={5} pl={7}>
        <h1>Phone book</h1>
        {/* <ContactForm onSubmit={this.onSubmit} /> */}
        <FormikForm onSubmit={this.onSubmit} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.onFilterChange} />

        {contacts.length > 0 ? (
          <ContactList
            contacts={this.getVisibleContacts()}
            onDelete={this.onDelete}
          />
        ) : (
          <p>There are no contacts yet here</p>
        )}
      </Box>
    );
  }
}

export default App;
