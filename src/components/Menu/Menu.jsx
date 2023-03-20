import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import items from './items';

import MenuUser from './MenuUser/MenuUser';

import { isUserLogin } from 'redux/auth/auth-selector';

import { Wrapper, MenuList, Link } from './menu.styled';

const Menu = () => {
  const elements = items.map(({ id, to, text }) => (
    <li key={id}>
      <Link to={to}>{text}</Link>
    </li>
  ));

  const isLogin = useSelector(isUserLogin);

  return (
    <Wrapper>
      <NavLink to="/">Logo</NavLink>
      <MenuList>{elements}</MenuList>
      {isLogin && <MenuUser />}
    </Wrapper>
  );
};

export default Menu;
