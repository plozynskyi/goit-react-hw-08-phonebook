import { useDispatch } from 'react-redux';

import { signin } from 'redux/auth/auth-operations';

import LoginForm from 'components/LoginForm/LoginForm';

import { LoginBox } from 'components/Menu/MenuAuth/menu-auth.styled';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSignin = data => {
    dispatch(signin(data));
  };

  return (
    <LoginBox>
      <LoginForm onSubmit={handleSignin} />
    </LoginBox>
  );
};

export default LoginPage;
