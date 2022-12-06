import ContactListItem from './ContactListItem';
import EditFormItem from './EditFormItem';
import { getFilter } from 'redux/filterSlice';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
  useUpdateContactMutation,
} from 'redux/contactsApi';
import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import { useState } from 'react';
import { filterObjectsList } from 'utils/filterObjectsList';
import { PropagateLoader } from 'react-spinners';

const ContactList = () => {
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  // const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  // const [updateContact, { isLoading: isUpdating }] = useUpdateContactMutation();
  const filter = useSelector(getFilter);
  const [editedId, setEditedId] = useState(null);

  if (isLoading) {
    return (
      <div>
        <PropagateLoader color="#435651" loading size={5} speedMultiplier={2} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.data}</div>;
  }

  const visibleContacts = filterObjectsList(filter, contacts, 'name');

  if (visibleContacts.length === 0) return <p>No such contacts</p>;

  return (
    <>
      {contacts.length > 0 ? (
        <List>
          {visibleContacts.map(({ id, name, phone }) => {
            if (id === editedId) {
              return (
                <EditFormItem
                  key={id}
                  contactId={id}
                  oldName={name}
                  oldPhone={phone}
                  onUpdate={updateContact}
                  onCancel={() => {
                    setEditedId(null);
                  }}
                />
              );
            }

            return (
              <ContactListItem
                key={id}
                id={id}
                name={name}
                phone={phone}
                // isDeleting={isDeleting}
                // isUpdating={isUpdating}
                // onDelete={() => {
                //   deleteContact(id);
                // }}
                onEdit={() => {
                  setEditedId(id);
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
