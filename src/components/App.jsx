import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { setFilter } from './Redux/filterSlice';

export const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const onFormInput = evt => {
    dispatch(setFilter(evt.target.value));
  };

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
      <Filter onChange={onFormInput} type="text" name="filter" value={filter} />

      <ContactList />
    </div>
  );
};
