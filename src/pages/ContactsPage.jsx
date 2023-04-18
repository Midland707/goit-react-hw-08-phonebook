import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import css from './App.module.css';

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className={css.section}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      {isLoading && !error ? (
        <b>Request in progress...</b>
      ) : contacts.length === 0 ? (
        <div>Contacts list is empty ... </div>
      ) : (
        <>
          <h2 className={css.title}>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
};

export default ContactsPage;
