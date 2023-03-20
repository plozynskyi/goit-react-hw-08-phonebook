import { LoginBox } from './menu-user.styled';
import { Button } from '@mui/material';

import { getUser } from 'redux/auth/auth-selector';
import { useSelector } from 'react-redux';

const MenuUser = () => {
  const { name } = useSelector(getUser);
  return (
    <LoginBox>
      <p>{name}</p>
      <Button variant="contained">Logout</Button>
    </LoginBox>
  );
};

export default MenuUser;
