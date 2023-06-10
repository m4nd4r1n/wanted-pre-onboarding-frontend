import { PATHNAMES } from './constants/pathnames';
import AuthPage from './pages/AuthPage';
import TodoPage from './pages/TodoPage';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

const { SIGN_IN, SIGN_UP, TODO } = PATHNAMES;

const AuthRoute = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return <Navigate to={TODO} />;
  }
  return <Outlet />;
};
const PrivateRoute = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to={SIGN_IN} />;
  }
  return <Outlet />;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={TODO} />}></Route>
      <Route element={<AuthRoute />}>
        <Route path={SIGN_UP} element={<AuthPage type={SIGN_UP} />}></Route>
        <Route path={SIGN_IN} element={<AuthPage type={SIGN_IN} />}></Route>
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path={TODO} element={<TodoPage />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
