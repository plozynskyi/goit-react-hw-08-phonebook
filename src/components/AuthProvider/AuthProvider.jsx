import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { current } from '../../redux/auth/auth-operations';
import { ProviderBox } from './auth-provider.styled';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return <ProviderBox>{children}</ProviderBox>;
};

export default AuthProvider;
