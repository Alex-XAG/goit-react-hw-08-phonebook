import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operationsContact';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
      {/* {error && <h3>Something wrong my friend(((</h3>} */}
    </div>
  );
};

export default Contacts;
