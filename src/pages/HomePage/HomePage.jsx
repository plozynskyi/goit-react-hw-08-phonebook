import { useSelector } from 'react-redux';

import MenuAuth from '../../components/Menu/MenuAuth/MenuAuth';

import { isUserLogin, getUser } from 'redux/auth/auth-selector';

import { HomeTitle } from './home-page-styled';

const HomePage = () => {
  const isLogin = useSelector(isUserLogin);
  const { name } = useSelector(getUser);

  return (
    <>
      {isLogin ? (
        <HomeTitle>{`Welcome "${name}" to your Phonebook`}</HomeTitle>
      ) : (
        <HomeTitle>Welcome to Phonebook</HomeTitle>
      )}
      {!isLogin && <MenuAuth />}
    </>
  );
};

export default HomePage;
