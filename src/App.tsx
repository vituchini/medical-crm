import './App.css';

import { LocalStorage, SessionStorage } from './utils/storage';
import { Navigate, Route, Routes } from 'react-router-dom';

import Dashboard from './Dashboard/Dashboard';
import Examples from './Examples/Examples';
import { Login } from './Auth';
import Logout from './Logout/Logout';
import { PATHS } from './common/constants/routes';
import PrivateRouter from './PrivateRouter';
import React from 'react';

function App() {
  const sessionToken = SessionStorage.get('access_token');
  const localToken = LocalStorage.get('access_token');

  window.token = sessionToken || localToken;
  window.storage = localToken ? LocalStorage : SessionStorage;

  return (
    <div className="App">
      <Routes>
        <Route path={PATHS.AUTH.LOGIN} element={<a href="/signin">Login</a>} /> {/*TODO*/}

        <Route path={PATHS.AUTH.SIGN_IN} element={<Login />} />
        <Route path={PATHS.EXAMPLES} element={<Examples />} />

        <Route path="/" element={<PrivateRouter />}>
          <Route path={PATHS.DASHBOARD.ROOT} element={<Dashboard />} />
          <Route path={PATHS.DASHBOARD.EDIT} element={<Dashboard />} />
        </Route>

        <Route path={PATHS.LOGOUT} element={<Logout />} />

        <Route path="*" element={<Navigate to={PATHS.AUTH.LOGIN} />} />
      </Routes>
    </div>
  );
}

export default App;
