import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { signin } from 'redux/auth/auth-operations';

import LoginForm from 'components/LoginForm/LoginForm';
import { isUserLogin } from 'redux/auth/auth-selector';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSignin = data => {
    dispatch(signin(data));
  };
  const isLogin = useSelector(isUserLogin);

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div className="container">
      <h2>LoginPage</h2>
      <LoginForm onSubmit={handleSignin} />
    </div>
  );
};

export default LoginPage;
