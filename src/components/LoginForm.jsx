import { Input, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authorization/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log('form = ', form);
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
          <Input
            type="email"
            name="email"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Password
          <Input
            type="password"
            name="password"
            pattern=".{6,}"
            title="Six or more characters"
            required
          />
        </label>
        <Button type="submit">Log In</Button>
      </form>

      <NavLink to={`/register`}>
        <Button>Register</Button>
      </NavLink>
    </>
  );
};
