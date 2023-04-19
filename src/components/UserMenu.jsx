import { ListItem, Button, Box, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authorization/operations';
import { selectUser } from 'redux/authorization/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <ListItem>
      <Box display="flex" alignItems="center" gap="20px">
        <Text color="white">Hello ( {user.email} )</Text>
        <Button colorScheme="red" variant="ghost" onClick={handleClick}>
          Logout
        </Button>
      </Box>
    </ListItem>
  );
};
