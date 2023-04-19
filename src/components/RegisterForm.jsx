import { Input, Button, Box } from '@chakra-ui/react';
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
    <Box>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Username
          <Input
            placeholder=". . . username"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Email
          <Input
            placeholder=". . . email"
            type="email"
            name="email"
            pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="email@dnsname"
            required
          />
        </label>
        <label>
          Password
          <Input
            placeholder=". . . password"
            type="password"
            name="password"
            pattern=".{6,}"
            title="Six or more characters"
            required
          />
        </label>
        <Button type="submit">Register</Button>
      </form>
    </Box>
  );
};
