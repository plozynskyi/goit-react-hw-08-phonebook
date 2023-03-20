import { useSelector } from 'react-redux';

import items from './items';
import MenuAuth from './MenuAuth/MenuAuth';
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
      <MenuList>{elements}</MenuList>
      {!isLogin && <MenuAuth />}
      {isLogin && <MenuUser />}
    </Wrapper>
  );
};

export default Menu;
