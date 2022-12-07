import PropTypes from 'prop-types';
import Button from 'components/Button';
import {
  ContactFormWrapper,
  ListItem,
  Name,
  Number,
  ToolsCell,
} from './ContactList.styled';
import { useContactsFormFields, useSubmitContactForm } from 'hooks';
import {
  useGetContactsQuery,
  useUpdateContactMutation,
} from 'redux/contactsApi';
import Spinner from 'components/Spinner';
import {
  EditForm,
  Field,
  FieldWrapper,
  Label,
  Tools,
} from './EditFormItem.styled';

const EditFormItem = ({ contactId, oldName, oldPhone, onCancel, onUpdate }) => {
  const [updateContact, { isLoading: isUpdating }] = useUpdateContactMutation();

  const { name, phone, onChangeHandle } = useContactsFormFields({
    defaultName: oldName,
    defaultPhone: oldPhone,
  });
  const { data: contacts } = useGetContactsQuery();
  const { submitContactHandler } = useSubmitContactForm();

  const onSubmitHandle = async e => {
    await submitContactHandler(e, {
      contactId: contactId,
      contactList: contacts,
      mutationHandler: updateContact,
    });

    onCancel();
  };

  return (
    <tr>
      <td colSpan={3}>
        <EditForm onSubmit={onSubmitHandle}>
          <FieldWrapper>
            <Label>
              Person
              <Field
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={onChangeHandle}
              />
            </Label>

            <Label>
              Phone
              <Field
                type="tel"
                name="phone"
                value={phone}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={onChangeHandle}
              />
            </Label>
          </FieldWrapper>

          <Tools>
            <Button type="submit" disabled={isUpdating}>
              Update
              {isUpdating && <Spinner type={Spinner.type.BUTTON} />}
            </Button>

            <Button type="button" onClick={onCancel}>
              Cancel
            </Button>
          </Tools>
        </EditForm>
      </td>
    </tr>

    // <ListItem>
    //   <ContactFormWrapper onSubmit={onSubmitHandle}>
    // <Name>
    //   <input
    //     type="text"
    //     name="name"
    //     value={name}
    //     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //     required
    //     onChange={onChangeHandle}
    //   />
    // </Name>
    // <Number>
    //   <input
    //     type="tel"
    //     name="phone"
    //     value={phone}
    //     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //     required
    //     onChange={onChangeHandle}
    //   />
    // </Number>

    // <Button type="submit" disabled={isUpdating}>
    //   Update
    //   {isUpdating && <Spinner type={Spinner.type.BUTTON} />}
    // </Button>

    // <Button type="button" onClick={onCancel}>
    //   Cancel
    // </Button>
    //   </ContactFormWrapper>
    // </ListItem>
  );
};

EditFormItem.propTypes = {
  contactId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  oldName: PropTypes.string.isRequired,
  oldPhone: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default EditFormItem;
