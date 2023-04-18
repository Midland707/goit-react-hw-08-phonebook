import { Input, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authorization/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
          Username
          <Input type="text" name="name" />
        </label>
        <label>
          Email
          <Input type="email" name="email" />
        </label>
        <label>
          Password
          <Input type="password" name="password" />
        </label>
        <Button type="submit">Register</Button>
      </form>

      <NavLink to={`/login`}>
        <Button>Log In</Button>
      </NavLink>
    </>
  );
};
