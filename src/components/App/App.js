import React from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Box from '../Box';
import { initialContacts } from 'utils/initialContacts';

class App extends React.Component {
  state = {
    contacts: [...initialContacts],
    filter: '',
  };

  onFilterChange = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  onSubmit = ({ id, name, number }) => {
    this.setState(({ contacts }) => {
      if (contacts.find(c => c.name === name)) {
        alert(`${name} is already in contact list`);
        return;
      }

      return {
        contacts: [...contacts, { id, name, number }],
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
    const { filter } = this.state;

    return (
      <Box pt={5} pl={7}>
        <h1>Phone book</h1>
        <ContactForm onSubmit={this.onSubmit} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.onFilterChange} />
        <ContactList
          contacts={this.getVisibleContacts()}
          onDelete={this.onDelete}
        />
      </Box>
    );
  }
}

export default App;
