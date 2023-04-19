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
    <Box w="500px" mr="auto" ml="auto">
      <Text color="white" fontSize="50px" textAlign="center">
        Registration
      </Text>
      <Text color="white" fontSize="20px" textAlign="center">
        Sign Up and make your phonebook!
      </Text>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values, actions) => {
          dispatch(
            register({
              name: values.name,
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
              <Field name="name">
                {({ field }) => (
                  <FormControl>
                    <FormLabel margin="0px" marginTop="20px">
                      Username
                      <Input
                        {...field}
                        placeholder=". . . username"
                        type="text"
                        name="name"
                        pattern="^[a-z\d]+$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                      />
                    </FormLabel>
                  </FormControl>
                )}
              </Field>
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
