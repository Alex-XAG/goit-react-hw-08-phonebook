import { AuthNavContainer, AuthNavLogIn } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <AuthNavLogIn to="/register">Register</AuthNavLogIn>
      <AuthNavLogIn to="/login">Log In</AuthNavLogIn>
    </AuthNavContainer>
  );
};
