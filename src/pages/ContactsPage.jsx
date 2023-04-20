import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsOperations';
import { selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';

import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Progress, Box, Text } from '@chakra-ui/react';

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
      color="white"
      marginTop="20px"
      display="flex"
      justifyContent="center"
      fontSize="20px"
      mr="auto"
      ml="auto"
    >
      <ContactForm />
      {isLoading && !error ? (
        <>
          <Progress hasStripe value={64} />
          <Text margin="0" marginBottom="15px">
            Request in progress...
          </Text>
        </>
      ) : contacts.length === 0 ? (
        <Text>Contacts list is empty ... </Text>
      ) : (
        <Box>
          <Text
            margin="0"
            marginBottom="15px"
            fontSize="30px"
            textAlign="center"
          >
            Contacts
          </Text>
          <Filter />
          <ContactList />
        </Box>
      )}
    </Box>
  );
};

export default ContactsPage;
