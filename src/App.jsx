import Menu from './components/Menu/Menu';
import UserRoutes from './UserRoutes';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import './shared/styles/styles.scss';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Menu />
          <UserRoutes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
