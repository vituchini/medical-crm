import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { PATHS } from './common/constants/routes';
import { LocalStorage, SessionStorage } from './utils/storage';
import './App.css';

import PrivateRouter from './PrivateRouter';

import { Login } from './Auth';
import Logout from './Logout/Logout';
import Examples from './Examples/Examples';
import Main from "./Main/Main";

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

        <Route
          path="/*"
          element={
            <PrivateRouter>
              <Main/>
            </PrivateRouter>
          }
        />

        <Route path={PATHS.LOGOUT} element={<Logout />} />

        <Route path="*" element={<Navigate to={PATHS.AUTH.LOGIN} />} />
      </Routes>
    </div>
  );
}

export default App;
