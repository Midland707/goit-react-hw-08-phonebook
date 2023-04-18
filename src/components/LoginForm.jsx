import { Input, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authorization/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <Input type="email" name="email" />
        </label>
        <label>
          Password
          <Input type="password" name="password" />
        </label>
        <Button type="submit">Log In</Button>
      </form>

      <NavLink to={`/register`}>
        <Button>Register</Button>
      </NavLink>
    </>
  );
};
