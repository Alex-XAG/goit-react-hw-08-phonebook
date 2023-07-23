import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { LogOutBtn, UserMenuContainer, UserMenuText } from './UserMenu.styled';
// import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuContainer>
      <UserMenuText>Welcome, {user.email}</UserMenuText>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogOutBtn>
    </UserMenuContainer>
  );
};
