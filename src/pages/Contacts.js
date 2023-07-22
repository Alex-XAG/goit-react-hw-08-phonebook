import { useGetContactsQuery } from 'redux/contactSlice';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const Contacts = () => {
  const { data: contacts, isFetching, error = null } = useGetContactsQuery();

  return (
    <div
      style={{
        height: '100vh',
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
      {isFetching && <div>Loading...</div>}
      {contacts && <ContactList />}
      {error && <h3>Something wrong my friend(((</h3>}
    </div>
  );
};

export default Contacts;
