import Button from 'components/Button';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';
import { useDeleteContactMutation } from 'redux/contactsApi';
import { ListItem, Name, Number, ContactWrapper } from './ContactList.styled';

const ContactListItem = ({
  id,
  name,
  phone,
  // onDelete,
  onEdit,
  // isDeleting,
  // isUpdating,
}) => {
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
          {isDeleting && (
            <ClipLoader color="#435651" size={12} speedMultiplier={1} />
          )}
        </Button>
      </ContactWrapper>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  isDeleting: PropTypes.bool.isRequired,
  isUpdating: PropTypes.bool.isRequired,
};

export default ContactListItem;
