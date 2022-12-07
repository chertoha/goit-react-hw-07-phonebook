import Button from 'components/Button';
import Spinner from 'components/Spinner';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';
import {
  ListItem,
  Name,
  Number,
  ContactWrapper,
  ToolsWrapper,
} from './ContactList.styled';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GrEdit } from 'react-icons/gr';
import Box from 'components/Box';

const ContactListItem = ({ id, name, phone, onEdit }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <ListItem>
      <ContactWrapper>
        <Name>
          <Box as="span">
            <BsFillPersonFill size={14} />
          </Box>
          {name}
        </Name>
        <Number>
          <Box as="span">
            <BsFillTelephoneFill size={12} />
          </Box>

          {phone}
        </Number>
      </ContactWrapper>

      <ToolsWrapper>
        <Button size="xs" type="button" onClick={onEdit}>
          {/* Edit */}
          <GrEdit size="14" />
        </Button>
        <Button
          size="xs"
          type="button"
          onClick={() => {
            deleteContact(id);
          }}
          disabled={isDeleting}
        >
          {/* Delete */}

          {isDeleting ? (
            <Spinner type={Spinner.type.BUTTON} />
          ) : (
            <RiDeleteBin6Line size="14" />
          )}
        </Button>
      </ToolsWrapper>
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
