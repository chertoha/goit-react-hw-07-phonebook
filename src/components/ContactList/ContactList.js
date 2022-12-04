import ContactListItem from './ContactListItem';
import { getFilter } from 'redux/filterSlice';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsApi';
import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import EditFormItem from './EditFormItem';

const ContactList = () => {
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  // console.log(contacts);

  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  if (isLoading) {
    return <div>...</div>;
  }
  const visibleContacts = getVisibleContacts();

  return (
    <>
      {visibleContacts.length > 0 ? (
        <List>
          {visibleContacts.map(({ id, name, phone }) => {
            if (id === '29') {
              return (
                <EditFormItem
                  key={id}
                  contactId={id}
                  oldName={name}
                  oldPhone={phone}
                />
              );
            }

            return (
              <ContactListItem
                key={id}
                name={name}
                phone={phone}
                isDeleting={isDeleting}
                onDelete={() => {
                  deleteContact(id);
                }}
              />
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
