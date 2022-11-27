import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Box from '../Box';
// import FormikForm from 'components/FormikForm/FormikForm';

const App = () => {
  return (
    <Box pt={5} pl={7}>
      <h1>Phone book</h1>

      <ContactForm />
      {/* <FormikForm /> */}

      <h2>Contacts</h2>

      <Filter />

      <ContactList />
    </Box>
  );
};

export default App;
