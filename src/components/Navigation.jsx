import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Progress } from '@chakra-ui/react';

export const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts </NavLink>
        </li>
      </ul>
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
    </div>
  );
};
