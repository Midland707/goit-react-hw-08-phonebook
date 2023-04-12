import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Navigation = lazy(() => import('./Navigation'));
const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}
