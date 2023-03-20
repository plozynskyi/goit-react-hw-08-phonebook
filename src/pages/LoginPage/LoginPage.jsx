import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { signin } from 'redux/auth/auth-operations';

import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div className="container">
      <h2>LoginPage</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
