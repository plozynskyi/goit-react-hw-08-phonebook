import { useSelector } from 'react-redux';

import MenuAuth from '../../components/Menu/MenuAuth/MenuAuth';

import { isUserLogin } from 'redux/auth/auth-selector';

const HomePage = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <div className="container">
      <h2>HomePage page</h2>

      {!isLogin && <MenuAuth />}
    </div>
  );
};

export default HomePage;
