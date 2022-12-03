import React from 'react';
import Button from 'components/Button';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FormBlock, FormInput, FormLabel } from './ContactForm.styled';
import { useAddContactMutation, useGetContactsQuery } from 'redux/contactsApi';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading: isUpdating }] = useAddContactMutation();

  const onSubmitHandle = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const phone = e.target.elements.number.value;

    if (contacts.find(c => c.name === name)) {
      alert(`${name} is already in contact list`);
    } else {
      // dispatch(addContact(name, number));
      addContact({ name, phone });
    }

    setName('');
    setNumber('');
  };

  const onChangeHandle = e => {
    const { name, value } = e.currentTarget;

    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  return (
    <FormBlock onSubmit={onSubmitHandle}>
      <FormLabel htmlFor={nameInputId}>Name</FormLabel>
      <FormInput
        id={nameInputId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={onChangeHandle}
      />

      <FormLabel htmlFor={numberInputId}>Number</FormLabel>
      <FormInput
        id={numberInputId}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={onChangeHandle}
      />

      <Button type="submit" disabled={isUpdating}>
        Add contact
      </Button>
    </FormBlock>
  );
};

export default ContactForm;
