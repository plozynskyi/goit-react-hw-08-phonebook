import { useDispatch } from 'react-redux';

import { signin } from 'redux/auth/auth-operations';

import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSignin = data => {
    dispatch(signin(data));
  };

  return (
    <div className="container">
      <LoginForm onSubmit={handleSignin} />
    </div>
  );
};

export default LoginPage;
