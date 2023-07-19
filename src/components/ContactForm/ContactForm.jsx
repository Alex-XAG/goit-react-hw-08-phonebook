import { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Label, Input, BtnForm } from './ContactForm.styled';
import { useAddContactMutation, useGetContactsQuery } from 'redux/contactSlice';

export const ContactForm = () => {
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const [inputName, setInputName] = useState('');
  const [inputNumber, setInputNumber] = useState('');

  // const { contacts } = useSelector(state => state.contacts);
  // const dispatch = useDispatch();

  const handleInputChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setInputName(target.value);
        break;
      case 'number':
        setInputNumber(target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit(inputName, inputNumber);
    // console.log(evt.currentTarget.elements.name.value);
    // console.log(evt.currentTarget.elements.number.value);

    evt.currentTarget.reset();
  };

  const onSubmit = (inputName, inputNumber) => {
    if (contacts.find(contact => contact.name === inputName)) {
      alert(`${inputName} is already in your phonebook`);
    } else if (contacts.find(contact => contact.phone === inputNumber)) {
      alert('This number exist in your phonebook');
    } else {
      addContact({
        name: inputName,
        phone: inputNumber,
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInputChange}
      />
      <Label htmlFor="number">Number</Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleInputChange}
      />
      <BtnForm type="submit" disabled={isLoading}>
        {isLoading ? 'Adding contact' : 'Add contact'}
      </BtnForm>
    </Form>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleInputChange: PropTypes.func,
};
