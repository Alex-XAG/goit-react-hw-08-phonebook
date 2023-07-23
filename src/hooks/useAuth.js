import { useSelector } from 'react-redux/es/hooks/useSelector';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/auth/selectors';

export const useAuth = () => ({
  isLoggedIn: useSelector(selectIsLoggedIn),
  isRefreshing: useSelector(selectIsRefreshing),
  user: useSelector(selectUser),
});
