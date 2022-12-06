import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Container from 'components/Container';
import Filter from 'components/Filter';
import Box from '../Box';
// import FormikForm from 'components/FormikForm/FormikForm';

// const App = () => {
//   return (
//     <Box pt={5} pl={7}>
//       <h1>Phone book</h1>

//       <ContactForm />
//       {/* <FormikForm /> */}

//       <h2>Contacts</h2>

//       <Filter />

//       <ContactList />
//     </Box>
//   );
// };

const App = () => {
  return (
    <>
      <Container>
        <Box as="h1" textAlign="center" pt={3} pb={3}>
          Phone book
        </Box>
      </Container>

      <Container>
        <ContactForm />
        {/* <FormikForm /> */}
      </Container>

      <Container>
        <h2>Contacts</h2>
      </Container>

      <Container>
        <Filter />
      </Container>

      <Container>
        <ContactList />
      </Container>
    </>
  );
};

export default App;
