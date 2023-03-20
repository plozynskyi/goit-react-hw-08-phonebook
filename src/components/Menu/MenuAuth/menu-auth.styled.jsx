import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
`;

const Link = styled(NavLink)`
  display: inline-block;
  padding: 10px 15px;
  background-color: #8a4141;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  border-radius: 10px;
  &.active {
    background-color: #000;
  }
  &:hover {
    color: #1dcd4f;
  }
`;

const LoginBox = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Wrapper, MenuList, Link, LoginBox };
