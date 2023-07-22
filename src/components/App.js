import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
// import { refreshUser } from 'redux/auth/operations';
// import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
  // const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  //   return isRefreshing ? (
  //     <b>Refreshing user...</b>
  //   ) : (
  //     <Routes>
  //       <Route path="/" element={<Layout />}>
  //         <Route index element={<HomePage />} />
  //         <Route
  //           path="/register"
  //           element={
  //             <RestrictedRoute
  //               redirectTo="/contacts"
  //               component={<RegisterPage />}
  //             />
  //           }
  //         />
  //         <Route
  //           path="/login"
  //           element={
  //             <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
  //           }
  //         />
  //         <Route
  //           path="/contacts"
  //           element={
  //             <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
  //           }
  //         />
  //       </Route>
  //     </Routes>
  //   );
};

// import { useGetContactsQuery } from 'redux/contactSlice';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';

// export const App = () => {
//   const { data: contacts, isFetching, error = null } = useGetContactsQuery();

//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 20,
//         color: '#010101',
//       }}
//     >
//       <h1>Phonebook</h1>
//       <ContactForm />

//       <h2>Contacts</h2>
//       <Filter />
//       {isFetching && <div>Loading...</div>}
//       {contacts && <ContactList />}
//       {error && <h3>Something wrong my friend(((</h3>}
//     </div>
//   );
// };
