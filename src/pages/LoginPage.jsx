import { Input, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
  const handleSubmit = e => {
    e.preventDefault();
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
      <NavLink to={`/register`}>Register</NavLink>
    </>
  );
};

export default LoginPage;
