import { Suspense } from 'react';
import { Box, List, ListItem, Button, Text } from '@chakra-ui/react';
import { Outlet, NavLink } from 'react-router-dom';
import { Progress } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/authorization/selectors';
import { UserMenu } from './UserMenu';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box paddingTop="20px">
      {isLoggedIn ? (
        <List
          display="flex"
          gap="50px"
          justifyContent="center"
          borderBottom="1px"
          borderColor="#ececec"
        >
          {/* <ListItem>
            <Text color="red" fontSize="30px">
              Phonebook
            </Text>
          </ListItem>
          <ListItem>
            <NavLink to="/contacts">
              <Button colorScheme="red" variant="ghost">
                Contacts
              </Button>
            </NavLink>
          </ListItem> */}
          <UserMenu />
        </List>
      ) : (
        <List
          display="flex"
          gap="50px"
          justifyContent="center"
          alignItems="center"
          borderBottom="1px"
          borderColor="#ececec"
        >
          <ListItem>
            <Text color="red" fontSize="35px">
              Phonebook
            </Text>
          </ListItem>
          <ListItem>
            <NavLink to="/login">
              <Button colorScheme="green" variant="ghost">
                Login
              </Button>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/register">
              <Button colorScheme="red" variant="ghost">
                Register
              </Button>
            </NavLink>
          </ListItem>
        </List>
      )}

      <Suspense
        fallback={
          <div>
            <Progress hasStripe value={64} />
            Loading page...
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Navigation;
