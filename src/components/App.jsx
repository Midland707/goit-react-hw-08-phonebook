import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/authorization/operations';
// import { selectIsLoggedIn } from 'redux/authorization/selectors';
import { selectIsRefreshing } from 'redux/authorization/selectors';
import { Progress } from '@chakra-ui/react';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

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
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
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
