import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routes } from 'routes';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

const UserRoutes = () => {
  const { HOME, LOGIN, REGISTER, CONTACTS } = routes;

  return (
    <Suspense fallback={<p>....Load page</p>}>
      <Routes>
        <Route path={HOME} element={<HomePage />} />
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={REGISTER} element={<RegisterPage />} />
        <Route path={CONTACTS} element={<ContactsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;