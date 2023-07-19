import { useGetContactsQuery } from 'redux/contactSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
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
