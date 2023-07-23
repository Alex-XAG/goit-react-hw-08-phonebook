import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
// import { useGetContactsQuery } from 'redux/contacts/contactSlice';
import { selectAllContacts } from 'redux/contacts/selectors';

const Contacts = () => {
  // const { data: contacts, isFetching, error = null } = useGetContactsQuery();

  const contacts = useSelector(selectAllContacts);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />

      {contacts && <ContactList />}
    </div>
  );
};

export default Contacts;
