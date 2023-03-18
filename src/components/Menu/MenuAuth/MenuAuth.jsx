import { Wrapper, MenuList, Link } from './menu-auth.styled';
import items from './items';

const MenuAuth = () => {
  const elements = items.map(({ id, to, text }) => (
    <li key={id}>
      <Link to={to}>{text}</Link>
    </li>
  ));

  return (
    <Wrapper>
      <MenuList>{elements}</MenuList>
    </Wrapper>
  );
};

export default MenuAuth;
