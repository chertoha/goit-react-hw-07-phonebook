import Button from 'components/Button';
import { nanoid } from 'nanoid';
import React from 'react';
import { FormBlock, FormInput, FormLabel } from './ContactForm.styled';
import PropTypes from 'prop-types';

class ContactForm extends React.Component {
  nameInputId = nanoid();
  numberInputId = nanoid();

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

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
      <FormBlock onSubmit={this.onSubmitHandle}>
        <FormLabel htmlFor={this.nameInputId}>Name</FormLabel>
        <FormInput
          id={this.nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.onChangeHandle}
        />

        <FormLabel htmlFor={this.numberInputId}>Number</FormLabel>
        <FormInput
          id={this.numberInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.onChangeHandle}
        />

        <Button type="submit">Add contact</Button>
      </FormBlock>
    );
  }
}

export default ContactForm;
