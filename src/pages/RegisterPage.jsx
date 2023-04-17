import { Input, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const RegisterPage = () => {
  const handleSubmit = e => {
    e.preventDefault();
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

export default RegisterPage;
