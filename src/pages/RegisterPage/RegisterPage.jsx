import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { signup } from 'redux/auth/auth-operations';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import { isUserLogin } from 'redux/auth/auth-selector';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSignup = data => {
    dispatch(signup(data));
  };
  const isLogin = useSelector(isUserLogin);

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div className="container">
      <h2>RegisterPage</h2>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
