import { PATHNAMES } from './constants/pathnames';
import AuthPage from './pages/AuthPage';
import { Route, Routes } from 'react-router-dom';

const { SIGN_IN, SIGN_UP } = PATHNAMES;

const App = () => {
  return (
    <Routes>
      <Route path={SIGN_UP} element={<AuthPage type={SIGN_UP} />}></Route>
      <Route path={SIGN_IN} element={<AuthPage type={SIGN_IN} />}></Route>
    </Routes>
  );
};

export default App;
