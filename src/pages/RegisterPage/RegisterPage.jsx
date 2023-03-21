import { useDispatch } from 'react-redux';

import { signup } from 'redux/auth/auth-operations';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import { RegisterBox } from '../RegisterPage/register-page.styled';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <RegisterBox>
      <RegisterForm onSubmit={handleSignup} />
    </RegisterBox>
  );
};

export default RegisterPage;
