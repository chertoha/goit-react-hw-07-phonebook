import Button from 'components/Button';
import PropTypes from 'prop-types';
import { ListItem, Name, Number, ContactWrapper } from './ContactList.styled';

const ContactListItem = ({
  name,
  phone,
  onDelete,
  onEdit,
  isDeleting,
  isUpdating,
}) => {
  return (
    <ListItem>
      <ContactWrapper>
        <Name>{name}:</Name>
        <Number>{phone}</Number>

        <Button type="button" onClick={onEdit} disabled={isUpdating}>
          Edit
        </Button>

        <Button type="button" onClick={onDelete} disabled={isDeleting}>
          Delete
        </Button>
      </ContactWrapper>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  isDeleting: PropTypes.bool.isRequired,
  isUpdating: PropTypes.bool.isRequired,
};

export default ContactListItem;
