import { useAuth } from 'hooks/useAuth';
import { NavigationContainer, NavigationLink } from './Navigation.styled';
// import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && <NavigationLink to="/contacts">Contacts</NavigationLink>}
    </NavigationContainer>
  );
};
