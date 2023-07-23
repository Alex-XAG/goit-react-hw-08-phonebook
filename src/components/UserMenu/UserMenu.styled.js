import styled from '@emotion/styled';

export const UserMenuContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const UserMenuText = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`;

export const LogOutBtn = styled.button`
  font-size: large;
  line-height: 1.5;
  font-weight: 700;
  text-align: center;

  outline: 1px solid gray;
  border: none;
  border-radius: 10px;
  margin-left: auto;
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
