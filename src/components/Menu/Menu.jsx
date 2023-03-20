import { useSelector } from 'react-redux';

import items from './items';

import MenuUser from './MenuUser/MenuUser';

import { isUserLogin } from 'redux/auth/auth-selector';

import { Wrapper, MenuList, Link } from './menu.styled';

const Menu = () => {
  const isLogin = useSelector(isUserLogin);
  const filterItem = !isLogin ? items.filter(item => !item.private) : items;
  const elements = filterItem.map(({ id, to, text }) => (
    <li key={id}>
      <Link to={to}>{text}</Link>
    </li>
  ));

  return (
    <Wrapper>
      <MenuList>{elements}</MenuList>
      {isLogin && <MenuUser />}
    </Wrapper>
  );
};

export default Menu;
