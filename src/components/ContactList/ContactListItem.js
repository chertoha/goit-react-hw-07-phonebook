import Button from 'components/Button';
import Spinner from 'components/Spinner';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';
import { useDeleteContactMutation } from 'redux/contactsApi';
import { ListItem, Name, Number, ContactWrapper } from './ContactList.styled';

const ContactListItem = ({ id, name, phone, onEdit }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <ListItem>
      <ContactWrapper>
        <Name>{name}:</Name>
        <Number>{phone}</Number>

        <Button type="button" onClick={onEdit}>
          Edit
        </Button>

        <Button
          type="button"
          onClick={() => {
            deleteContact(id);
          }}
          disabled={isDeleting}
        >
          Delete
          {isDeleting && <Spinner type={Spinner.type.BUTTON} />}
        </Button>
      </ContactWrapper>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ContactListItem;
