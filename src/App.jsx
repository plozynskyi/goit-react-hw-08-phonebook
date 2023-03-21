import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import Menu from './components/Menu/Menu';
import UserRoutes from './UserRoutes';
import AuthProvider from 'components/AuthProvider/AuthProvider';
import { store, persistor } from './redux/store';

import './shared/styles/styles.scss';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <Menu />
            <UserRoutes />
            <ToastContainer theme="light" autoClose={3000} />
          </BrowserRouter>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
