import Button from 'components/Button';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  Name,
  Number,
  ContactWrapper,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/contactsSlice';
import { LocalStorageApi } from 'services/StorageApi';
import { useEffect } from 'react';
// import { initialContacts } from 'utils/initialContacts';
// localStorage.setItem('contacts', JSON.stringify(initialContacts));

const storageContacts = new LocalStorageApi('contacts');

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  // let contacts = useSelector(state => state.contacts);

  // if (contacts.length === 0) {
  //   contacts = storageContacts.get() || contacts;
  // }

  useEffect(() => {
    storageContacts.update(contacts);
  }, [contacts]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      {contacts.length > 0 ? (
        <List>
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <ListItem key={id}>
                <ContactWrapper>
                  <Name>{name}:</Name>
                  <Number>{number}</Number>
                  <Button
                    type="button"
                    onClick={() => {
                      dispatch(deleteContact(id));
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

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDelete: PropTypes.func.isRequired,
// };

export default ContactList;
