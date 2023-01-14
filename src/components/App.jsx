import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { selectContacts } from './Redux/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 32,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>
      {contacts.length >= 1 ? (
        <div>
          {<Filter />}
          {<ContactList />}
        </div>
      ) : (
        <h3>No contacts yet</h3>
      )}
    </div>
  );
};
