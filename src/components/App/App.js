import React from 'react';
import { nanoid } from 'nanoid';

class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  onNameChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const id = nanoid();

    this.setState(prevState => {
      const { contacts } = prevState;
      return (
        !contacts.find(c => c.name === name) && {
          contacts: [...contacts, { id, name }],
        }
      );
    });

    this.reset();
  };

  reset() {
    this.setState({ name: '' });
  }

  render() {
    const { name, contacts } = this.state;
    return (
      <>
        <h1>Phone book</h1>
        {
          //----------------------------------------------------------------
        }
        <form onSubmit={this.onFormSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.onNameChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        {
          //----------------------------------------------------------------
        }
        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
