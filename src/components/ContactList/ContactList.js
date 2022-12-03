import Button from 'components/Button';
import {
  List,
  ListItem,
  Name,
  Number,
  ContactWrapper,
} from './ContactList.styled';
// import { deleteContact, getContactsList } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { useGetContactsQuery } from 'redux/contactsApi';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const { data: contacts, error, isLoading } = useGetContactsQuery();

  console.log(contacts);
  console.log(useGetContactsQuery());
  // const dispatch = useDispatch();
  // const contacts = useSelector(getContactsList);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  // if (!contacts) {
  //   return <div>???</div>;
  // }

  if (isLoading) {
    return <div>...</div>;
  }
  const visibleContacts = getVisibleContacts();

  return (
    <>
      {visibleContacts.length > 0 ? (
        <List>
          {visibleContacts.map(({ id, name, phone }) => {
            return (
              <ListItem key={id}>
                <ContactWrapper>
                  <Name>{name}:</Name>
                  <Number>{phone}</Number>
                  <Button
                    type="button"
                    onClick={() => {
                      // dispatch(deleteContact(id));
                    }}
                  >
                    Delete
                  </Button>
                </ContactWrapper>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <p>There are no contacts yet here</p>
      )}
    </>
  );
};

export default ContactList;
