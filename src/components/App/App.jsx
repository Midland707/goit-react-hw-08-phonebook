import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import css from './App.module.css';

export function App() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  //   Маршрутизація
  // Додай маршрутизацію з бібліотекою React Router. У програмі має бути кілька сторінок:

  // /register - публічний маршрут реєстрації нового користувача з формою
  // /login - публічний маршрут логіна існуючого користувача з формою
  // /contacts - приватний маршрут для роботи зі списком контактів користувача
  // Додай компонент навігації Navigation з посиланнями для переходу по маршрутах.

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
}
