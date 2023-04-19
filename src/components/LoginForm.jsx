import {
  Input,
  Button,
  Box,
  Text,
  FormLabel,
  FormControl,
} from '@chakra-ui/react';

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
    <Box w="500px" mr="auto" ml="auto">
      <Text color="white" fontSize="50px" textAlign="center">
        Sign in
      </Text>
      <Text color="white" fontSize="20px" textAlign="center">
        Sign in and start managing your contacts!
      </Text>
      <FormControl
        onSubmit={handleSubmit}
        autoComplete="off"
        color="white"
        w="300px"
        mr="auto"
        ml="auto"
      >
        <FormLabel margin="0px" marginTop="20px">
          Email
          <Input
            placeholder=". . . email"
            type="email"
            name="email"
            pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="email@dnsname"
            required
          />
        </FormLabel>
        <FormLabel margin="0px" marginTop="20px">
          Password
          <Input
            placeholder=". . . password"
            type="password"
            name="password"
            pattern=".{6,}"
            title="Six or more characters"
            required
          />
        </FormLabel>
        <Button
          type="submit"
          w="300px"
          marginTop="20px"
          color="white"
          bg="#20DF7F"
        >
          Log In
        </Button>
      </FormControl>
    </Box>
  );
};
