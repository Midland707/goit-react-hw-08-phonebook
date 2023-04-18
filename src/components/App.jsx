import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/authorization/operations';
// import { selectIsLoggedIn } from 'redux/authorization/selectors';
import { selectIsRefreshing } from 'redux/authorization/selectors';
import { Progress } from '@chakra-ui/react';

const Navigation = lazy(() => import('./Navigation'));
const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export function App() {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <>
      <Progress hasStripe value={64} />
      <b>Refreshing user...</b>
    </>
  ) : (
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
