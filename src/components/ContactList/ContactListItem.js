import Button from 'components/Button';
import Spinner from 'components/Spinner';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';
import {
  ListItem,
  Name,
  Number,
  ContactWrapper,
  ToolsCell,
} from './ContactList.styled';

const ContactListItem = ({ id, name, phone, onEdit }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <tr>
      <td>
        <Name>{name}:</Name>
      </td>
      <td>
        <Number>{phone}</Number>
      </td>
      <ToolsCell>
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
      </ToolsCell>
    </tr>

    // <ListItem>
    //   <ContactWrapper>
    //     <Name>{name}:</Name>
    //     <Number>{phone}</Number>

    // <Button type="button" onClick={onEdit}>
    //   Edit
    // </Button>

    // <Button
    //   type="button"
    //   onClick={() => {
    //     deleteContact(id);
    //   }}
    //   disabled={isDeleting}
    // >
    //   Delete
    //   {isDeleting && <Spinner type={Spinner.type.BUTTON} />}
    // </Button>
    //   </ContactWrapper>
    // </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ContactListItem;
