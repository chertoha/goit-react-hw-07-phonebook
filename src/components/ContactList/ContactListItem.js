import Button from 'components/Button';
import { ListItem, Name, Number, ContactWrapper } from './ContactList.styled';

const ContactListItem = ({
  name,
  phone,
  onDelete,
  isDeleting,
  isUpdating,
  onEdit,
}) => {
  return (
    <ListItem>
      <ContactWrapper>
        <Name>{name}:</Name>
        <Number>{phone}</Number>

        <Button type="button" onClick={onDelete} disabled={isDeleting}>
          Delete
        </Button>

        <Button type="button" onClick={onEdit} disabled={isUpdating}>
          Edit
        </Button>
      </ContactWrapper>
    </ListItem>
  );
};

export default ContactListItem;
