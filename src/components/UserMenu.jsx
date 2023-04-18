import { ListItem, Button } from '@chakra-ui/react';
import { logOut } from 'redux/authorization/operations';

export const UserMenu = () => {
  const handleClick = () => {
    logOut();
  };
  return (
    <ListItem>
      <p>mango@mail.com</p>
      <Button onClick={handleClick}>Logout</Button>
    </ListItem>
  );
};
