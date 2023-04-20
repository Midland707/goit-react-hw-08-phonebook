import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';
import { Text, ListItem, Button } from '@chakra-ui/react';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ListItem
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      marginTop="10px"
    >
      <Text>{name}: </Text>
      <Text>{number}</Text>
      <Button colorScheme="red" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
