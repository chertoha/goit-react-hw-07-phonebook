import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  StyledForm,
  Label,
  Input,
  ErrorWrapper,
  Message,
} from './FormikForm.styled';
import Button from 'components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

const initialValues = {
  name: '',
  number: '',
};

const regex = {
  name: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
  number:
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
};

const ERRORS = {
  NAME: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  NUMBER:
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
};

const validationSchema = yup.object().shape({
  name: yup.string().matches(regex.name, ERRORS.NAME).required(),
  number: yup.string().matches(regex.number, ERRORS.NUMBER).required(),
});

const FormikForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.list);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = ({ name, number }, actions) => {
    if (contacts.find(c => c.name === name)) {
      alert(`${name} is already in contact list`);
    } else {
      dispatch(addContact(name, number));
    }
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <StyledForm>
        <Label htmlFor={nameInputId}>Name</Label>
        <ErrorWrapper>
          <Input id={nameInputId} type="text" name="name" required />
          <ErrorMessage name="name" render={msg => <Message>{msg}</Message>} />
        </ErrorWrapper>

        <Label htmlFor={numberInputId}>Number</Label>
        <ErrorWrapper>
          <Input id={numberInputId} type="tel" name="number" required />
          <ErrorMessage
            name="number"
            render={msg => <Message>{msg}</Message>}
          />
        </ErrorWrapper>

        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};

export default FormikForm;
