import React from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

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
    this.setState(prevState => {
      const { contacts } = prevState;
      return (
        !contacts.find(c => c.name === name && c.number === number) && {
          contacts: [...contacts, { id, name, number }],
        }
      );
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <h1>Phone book</h1>
        <ContactForm onSubmit={this.onSubmit} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.onFilterChange} />
        <ContactList contacts={contacts} />
      </>
    );
  }
}

export default App;
