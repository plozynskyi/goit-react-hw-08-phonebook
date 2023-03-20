import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getUser } from '../../../redux/auth/auth-selector';
import { logout } from 'redux/auth/auth-operations';
import { isUserLogin } from 'redux/auth/auth-selector';

import { LoginBox } from './menu-user.styled';
import { Button } from '@mui/material';

const MenuUser = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();
  const isLogin = useSelector(isUserLogin);

  if (!isLogin) {
    return <Navigate to="/home" />;
  }

  console.log(isLogin);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <LoginBox>
      <p>{name}</p>
      <Button variant="contained" onClick={onLogout}>
        Logout
      </Button>
    </LoginBox>
  );
};

export default MenuUser;
