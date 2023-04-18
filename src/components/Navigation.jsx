import { Suspense } from 'react';
import { Box, List, ListItem, Button } from '@chakra-ui/react';
import { Outlet, NavLink } from 'react-router-dom';
import { Progress } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/authorization/selectors';
import { UserMenu } from './UserMenu';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box>
      {isLoggedIn ? (
        <List display="flex" gap="50px" justifyContent="center">
          <ListItem>
            <NavLink to="/contacts">
              <Button>Contacts</Button>
            </NavLink>
          </ListItem>
          <UserMenu />
        </List>
      ) : (
        <List display="flex" gap="50px" justifyContent="center">
          <ListItem>
            <NavLink to="/login">
              <Button>Login</Button>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/register">
              <Button>Register</Button>
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
