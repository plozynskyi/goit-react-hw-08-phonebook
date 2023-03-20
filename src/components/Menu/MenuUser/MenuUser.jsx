import { LoginBox } from './menu-user.styled';
import { Button } from '@mui/material';

const MenuUser = () => {
  return (
    <LoginBox>
      <p>mango@mail.com</p>
      <Button variant="contained">Logout</Button>
    </LoginBox>
  );
};

export default MenuUser;
