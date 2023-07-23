import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const UserMenuText = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`;

export const AuthNavLogIn = styled(NavLink)`
  font-size: large;
  line-height: 1.2;
  font-weight: 700;
  text-align: center;

  text-decoration: none;

  outline: 1px solid gray;
  border: none;
  border-radius: 10px;
  margin-left: auto;
  padding: 8px;
  margin-top: 13px;
  margin-bottom: 13px;
  background-color: yellowgreen;
  color: #fff;
  transform: scale(1);
  transition: transform 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);

  &:hover,
  :focus {
    transform: scale(1.1);
    background-color: #fff;
    color: yellowgreen;
  }
`;
