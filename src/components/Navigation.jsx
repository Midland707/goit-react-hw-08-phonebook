import { Suspense } from 'react';
import { Box, List, ListItem, Button } from '@chakra-ui/react';
import { Outlet, NavLink } from 'react-router-dom';
import { Progress } from '@chakra-ui/react';

const Navigation = () => {
  return (
    <Box>
      <List display="flex">
        <ListItem>
          <NavLink to="/">
            <Button>Home</Button>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/register">
            <Button>Register</Button>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/login">
            <Button>Login</Button>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/contacts">
            <Button>Contacts</Button>
          </NavLink>
        </ListItem>
      </List>
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
