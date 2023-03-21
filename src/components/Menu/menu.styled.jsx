import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px;
`;

const MenuList = styled.ul`
  display: flex;
  gap: 10px;
  padding: 15px;
  list-style: none;
`;

const Link = styled(NavLink)`
  display: inline-block;
  padding: 10px 15px;
  background-color: #1976d2;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  &.active {
    background-color: #000;
  }
  &:hover {
    color: #1dcd4f;
  }
`;

export { Wrapper, MenuList, Link };
