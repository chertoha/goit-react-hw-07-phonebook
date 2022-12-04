import Button from 'components/Button';
import {
  ContactFormWrapper,
  ContactWrapper,
  ListItem,
  Name,
  Number,
} from './ContactList.styled';
import { useContactsFormFields, useSubmitContactForm } from 'hooks';
import {
  useGetContactsQuery,
  useUpdateContactMutation,
} from 'redux/contactsApi';
import ContactListItem from './ContactListItem';

const EditFormItem = ({ contactId, oldName, oldPhone, onUpdate }) => {
  const { name, phone, onChangeHandle } = useContactsFormFields({
    defaultName: oldName,
    defaultPhone: oldPhone,
  });
  const { submitContactHandler } = useSubmitContactForm();
  const { data: contacts } = useGetContactsQuery();
  const [updateContact, { isLoading: isUpdating }] = useUpdateContactMutation();

  const onSubmitHandle = e => {
    submitContactHandler(e, {
      contactId: contactId,
      contactList: contacts,
      mutationHandler: updateContact,
    });
  };

  return (
    <ListItem>
      <ContactFormWrapper onSubmit={onSubmitHandle}>
        <Name>
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onChangeHandle}
          />
        </Name>
        <Number>
          <input
            type="tel"
            name="phone"
            value={phone}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onChangeHandle}
          />
        </Number>

        <Button type="submit" disabled={isUpdating}>
          Update
        </Button>

        <Button
          type="button"
          onClick={() => {
            console.log('click Cancel');
          }}
        >
          Cancel
        </Button>
      </ContactFormWrapper>
    </ListItem>
  );
};

export default EditFormItem;
