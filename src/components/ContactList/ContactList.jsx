import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/contactsSelectors';
import css from './ContactList.module.css';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
