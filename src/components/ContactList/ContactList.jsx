import {
  ContactListStyle,
  ContactListItemStyle,
  DeleteButton,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../Redux/contactsSlice';
import { selectContacts, selectFilter } from 'components/Redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterToLowerCase = filter.toLocaleLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toString().toLowerCase().includes(filterToLowerCase)
  );
  return (
    <>
      <ContactListStyle>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactListItemStyle key={id}>
            {name}: {number}
            <DeleteButton type="button" onClick={() => dispatch(remove(id))}>
              Delete
            </DeleteButton>
          </ContactListItemStyle>
        ))}
      </ContactListStyle>
    </>
  );
};
