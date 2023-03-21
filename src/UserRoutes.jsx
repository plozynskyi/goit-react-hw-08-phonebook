import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routes } from 'routes';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

import Loader from 'shared/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));

const UserRoutes = () => {
  const { HOME, LOGIN, REGISTER, CONTACTS } = routes;

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={HOME} element={<HomePage />} />
        <Route element={<PrivateRoute />}>
          <Route path={CONTACTS} element={<ContactsPage />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path={LOGIN} element={<LoginPage />} />
          <Route path={REGISTER} element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
