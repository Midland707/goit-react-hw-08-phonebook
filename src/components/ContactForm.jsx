import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { Input, Button, FormLabel, Box, Text } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <Box w="400px">
      <Text color="white" fontSize="30px" textAlign="center">
        Add contact
      </Text>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={(values, actions) => {
          const alertState = contacts.find(
            contact => contact.name === values.name
          );
          if (!alertState) {
            dispatch(
              addContact({
                name: values.name,
                number: values.number,
              })
            );
            actions.setSubmitting(false);
            actions.resetForm();
          } else alert(`${values.name} is already in contacts`);
        }}
      >
        {props => (
          <Form>
            <Box color="white" w="300px" mr="auto" ml="auto">
              <Field name="name">
                {({ field }) => (
                  <FormLabel margin="0px" marginTop="20px">
                    Name
                    <Input
                      {...field}
                      placeholder=". . . name"
                      type="text"
                      name="name"
                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Jacob Mercer..."
                      required
                    />
                  </FormLabel>
                )}
              </Field>
              <Field name="number">
                {({ field }) => (
                  <FormLabel margin="0px" marginTop="20px">
                    Number phone
                    <Input
                      {...field}
                      placeholder=". . . number phone"
                      type="tel"
                      name="number"
                      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                      required
                    />
                  </FormLabel>
                )}
              </Field>
              <Button
                type="submit"
                w="300px"
                marginTop="20px"
                color="white"
                colorScheme="green"
              >
                Add contact
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
