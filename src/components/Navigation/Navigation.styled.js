import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 15px;
`;

export const UserMenuText = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`;

export const NavigationLink = styled(NavLink)`
  font-size: large;
  line-height: 1.2;
  font-weight: 700;
  text-align: center;

  text-decoration: none;
`;
