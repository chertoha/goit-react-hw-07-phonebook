import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { StyledForm, Label, Input } from './FormikForm.styled';
import Button from 'components/Button';

const initialValues = {
  name: '',
  number: '',
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .required(),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
    )
    .required(),
});

const FormikForm = ({ onSubmit }) => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = (values, actions) => {
    const id = nanoid();

    onSubmit({ id, ...values });
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
        <Input id={nameInputId} type="text" name="name" required />
        <ErrorMessage name="name" />

        <Label htmlFor={numberInputId}>Number</Label>
        <Input id={numberInputId} type="tel" name="number" required />
        <ErrorMessage name="number" />

        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};

export default FormikForm;
