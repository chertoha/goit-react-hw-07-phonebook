import { nanoid } from 'nanoid';
import React from 'react';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  onChangeHandle = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmitHandle = e => {
    e.preventDefault();

    const id = nanoid();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    this.props.onSubmit({ id, name, number });

    this.reset();
  };

  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onSubmitHandle}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.onChangeHandle}
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.onChangeHandle}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
