import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsOperations';
import { selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';

import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Box, Text } from '@chakra-ui/react';

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Box
      marginTop="20px"
      display="flex"
      flexWrap="wrap"
      alignContent="center"
      flexDirection="column"
      fontSize="20px"
    >
      <ContactForm />
      {isLoading && !error ? (
        <b>Request in progress...</b>
      ) : contacts.length === 0 ? (
        <div>Contacts list is empty ... </div>
      ) : (
        <>
          <Text margin="0" marginBottom="15px">
            Contacts
          </Text>
          <Filter />
          <ContactList />
        </>
      )}
    </Box>
  );
};

export default ContactsPage;
