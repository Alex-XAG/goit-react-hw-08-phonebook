import React from 'react';
import { List, ItemLi, TextItem, BtnDelete } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operationsContact';

export const ContactList = () => {
  // const [removeContact, { isLoading }] = useRemoveContactMutation();
  // const { data: contacts } = useGetContactsQuery();
  const dispatch = useDispatch();

  const contacts = useSelector(selectAllContacts);

  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ItemLi key={id}>
          <TextItem>
            {name}: {number}
          </TextItem>
          <BtnDelete type="button" onClick={() => dispatch(deleteContact(id))}>
            {/* {isLoading ? 'Removing...' : 'Remove'} */}
            Remove
          </BtnDelete>
        </ItemLi>
      ))}
    </List>
  );
};
