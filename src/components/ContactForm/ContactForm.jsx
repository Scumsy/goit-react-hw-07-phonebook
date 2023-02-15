import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BtnAddContact } from './ContactForm.styled';
import { FilterStyle } from 'components/Filter/Filter.styled';
import { selectContacts } from 'Redux/Contacts/selectors';
import { addContacts } from 'Redux/Contacts/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const onAddContact = data => {
    const checkContact = contacts.find(contact => contact.name === data.name);

    checkContact
      ? alert(`${data.name} is already in the contacts`)
      : dispatch(addContacts(data));
  };

  const onFormInput = evt => {
    const chooseOption = evt.target.name;

    switch (chooseOption) {
      case 'name':
        setName(evt.target.value);
        break;

      case 'phone':
        setPhone(evt.target.value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  const onNewSubmit = evt => {
    evt.preventDefault();
    onAddContact({ name, phone });
    reset();
  };

  return (
    <>
      <form onSubmit={onNewSubmit}>
        <label htmlFor="contact_name">
          Name
          <FilterStyle
            id="contact_name"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onFormInput}
          />
        </label>
        Number
        <label htmlFor="contact_id">
          <FilterStyle
            id="contact_id"
            type="tel"
            name="phone"
            value={phone}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onFormInput}
          />
        </label>
        <BtnAddContact type="submit">Add contact</BtnAddContact>
      </form>
    </>
  );
};
