import React from 'react';
import { List, ItemLi, TextItem, BtnDelete } from './ContactList.styled';
import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useRemoveContactMutation,
} from 'redux/contactSlice';

export const ContactList = () => {
  const [removeContact, { isLoading }] = useRemoveContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(({ id, name, phone: number }) => (
        <ItemLi key={id}>
          <TextItem>
            {name}: {number}
          </TextItem>
          <BtnDelete type="button" onClick={() => removeContact(id)}>
            {isLoading ? 'Removing...' : 'Remove'}
          </BtnDelete>
        </ItemLi>
      ))}
    </List>
  );
};
