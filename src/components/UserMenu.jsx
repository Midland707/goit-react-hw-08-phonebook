import { ListItem, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authorization/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <ListItem>
      <p>mango@mail.com</p>
      <Button onClick={handleClick}>Logout</Button>
    </ListItem>
  );
};
