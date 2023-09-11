import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';
// import { Profile } from 'pages/Profile';
// import { UpdateAvatar } from 'pages/UpdateAvatar';

// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={Register} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={Login} redirectTo="/contacts" />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={Contacts} redirectTo="/login" />}
        />
        <Route path="*" element={<h2>Not found</h2>} />
        {/* <Route
          path="/profile"
          element={<PrivateRoute component={Profile} redirectTo="/login" />}
        />
        <Route
          path="/profile/update"
          element={
            <PrivateRoute component={UpdateAvatar} redirectTo="/login" />
          }
        /> */}
      </Route>
    </Routes>
  );
  // const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  // return isRefreshing ? (
  //   <b>Refreshing user...</b>
  // ) : (
  //     <Routes>
  //       <Route path="/" element={<Layout />}>
  //         <Route index element={<HomePage />} />
  // <Route
  //   path="/register"
  //   element={
  //     <RestrictedRoute
  //       redirectTo="/contacts"
  //       component={<RegisterPage />}
  //     />
  //   }
  // />
  //         <Route
  //           path="/login"
  //           element={
  //             <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
  //           }
  //         />
  //   <Route
  //     path="/contacts"
  //     element={
  //       <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
  //     }
  //   />
  // </Route>
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
