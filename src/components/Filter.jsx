import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { Input, FormLabel } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <FormLabel color="white" margin="0px" marginTop="20px">
      Find contacts by name
      <Input
        placeholder=". . . name to find"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </FormLabel>
  );
};
