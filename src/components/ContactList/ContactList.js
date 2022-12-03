import Button from 'components/Button';
import {
  List,
  ListItem,
  Name,
  Number,
  ContactWrapper,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContactsList } from 'redux/contactsSlice';
// import { getFilter } from 'redux/filterSlice';
import { useGetContactsQuery } from 'redux/contactsApi';

const ContactList = () => {
  const { data, error, isLoading } = useGetContactsQuery();

  console.log(data);
  const dispatch = useDispatch();
  // const contacts = useSelector(getContactsList);
  // const filter = useSelector(getFilter);

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const visibleContacts = getVisibleContacts();

  // return (
  //   <>
  //     {!contacts && <div>contacts none</div>}
  //     {contacts.length > 0 ? (
  //       <List>
  //         {visibleContacts.map(({ id, name, number }) => {
  //           return (
  //             <ListItem key={id}>
  //               <ContactWrapper>
  //                 <Name>{name}:</Name>
  //                 <Number>{number}</Number>
  //                 <Button
  //                   type="button"
  //                   onClick={() => {
  //                     dispatch(deleteContact(id));
  //                   }}
  //                 >
  //                   Delete
  //                 </Button>
  //               </ContactWrapper>
  //             </ListItem>
  //           );
  //         })}
  //       </List>
  //     ) : (
  //       <p>There are no contacts yet here</p>
  //     )}
  //   </>
  // );
};

export default ContactList;
