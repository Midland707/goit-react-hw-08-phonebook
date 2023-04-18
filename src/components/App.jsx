import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/authorization/selectors';

const Navigation = lazy(() => import('./Navigation'));
const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export function App() {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route
            index
            element={<HomePage />}
            // element={isLoggedIn ? <ContactsPage /> : <LoginPage />}
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route
            path="*"
            element={<HomePage />}
            // element={isLoggedIn ? <ContactsPage /> : <LoginPage />}
          />
        </Route>
      </Routes>
    </div>
  );
}
