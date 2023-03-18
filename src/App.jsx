import Menu from './components/Menu/Menu';
import UserRoutes from './UserRoutes';

import './shared/styles/styles.scss';

function App() {
  return (
    <div className="App">
      <Menu />
      <UserRoutes />
    </div>
  );
}

export default App;
