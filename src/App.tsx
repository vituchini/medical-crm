import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Examples from './Examples/Examples';

import { PATHS } from './common/constants/routes';
import { LocalStorage, SessionStorage } from './utils/storage';

import './App.css';

// import { api } from "./api/api";

function App() {
  const sessionToken = SessionStorage.get('access_token');
  const localToken = LocalStorage.get('access_token');

  window.token = sessionToken || localToken;
  window.storage = localToken ? LocalStorage : SessionStorage;

  // const testReq = () => {
  //   api.post('/signin', { data: { email: "test-hpadmini@gmail.com", password: "Ledger@1234" } }).then(x => {
  //     console.log(x);
  //
  //     window.storage.set('access_token', x.user.token);
  //   })
  // }
  //
  // const testReq1 = () => {
  //   api.get('/login/user').then(x => {
  //     console.log(x);
  //   })
  // }

  return (
    <div className="App">
      {/*<button onClick={testReq}>button</button>*/}
      {/*<button onClick={testReq1}>button</button>*/}

      <Routes>
        <Route path={PATHS.EXAMPLES} element={<Examples />} />
      </Routes>
    </div>
  );
}

export default App;
