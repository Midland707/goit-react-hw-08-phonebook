import {
  Input,
  Button,
  FormLabel,
  FormControl,
  Box,
  Text,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authorization/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Box w="500px" mr="auto" ml="auto">
      <Text color="white" fontSize="50px" textAlign="center">
        Sign in
      </Text>
      <Text color="white" fontSize="20px" textAlign="center">
        Sign in and start managing your contacts!
      </Text>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, actions) => {
          dispatch(
            logIn({
              email: values.email,
              password: values.password,
            })
          );
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {props => (
          <Form>
            <Box color="white" w="300px" mr="auto" ml="auto">
              <Field name="email">
                {({ field }) => (
                  <FormControl>
                    <FormLabel margin="0px" marginTop="20px">
                      Email
                      <Input
                        {...field}
                        placeholder=". . . email"
                        type="email"
                        name="email"
                        pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        title="email@dnsname.com"
                        required
                      />
                    </FormLabel>
                  </FormControl>
                )}
              </Field>
              <Field name="password">
                {({ field }) => (
                  <FormControl>
                    <FormLabel margin="0px" marginTop="20px">
                      Password
                      <Input
                        {...field}
                        placeholder=". . . password"
                        type="password"
                        name="password"
                        pattern=".{6,}"
                        title="Six or more characters"
                        required
                      />
                    </FormLabel>
                  </FormControl>
                )}
              </Field>
              <Button
                type="submit"
                w="300px"
                marginTop="20px"
                color="white"
                colorScheme="green"
              >
                Log In
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
