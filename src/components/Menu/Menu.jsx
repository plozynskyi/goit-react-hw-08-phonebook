import Button from '@mui/material/Button';

import MenuAuth from './MenuAuth/MenuAuth';

import { Wrapper, MenuList, Link, LoginBox } from './menu.styled';
import items from './items';

const Menu = () => {
  const elements = items.map(({ id, to, text }) => (
    <li key={id}>
      <Link to={to}>{text}</Link>
    </li>
  ));

  return (
    <Wrapper>
      <MenuList>{elements}</MenuList>
      <MenuAuth />
      {/* <LoginBox>
        <p>mango@mail.com</p>
        <Button variant="contained">Logout</Button>
      </LoginBox> */}
    </Wrapper>
  );
};

export default Menu;
