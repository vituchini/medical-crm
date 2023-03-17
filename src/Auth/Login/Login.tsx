import React, { useState } from 'react';

import { PATHS } from '../../common/constants/routes';
import User from '../../models/User';
import style from './style.module.css';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../ContextProvider';

const SignIn = () => {
  const [email, setEmail] = useState<any>(null);
  const [password, setPassword] = useState<any>(null);
  const { setCurrentUser } = useUserContext();

  const navigate = useNavigate();

  const login = () => {
    User.login(email, password).then((user) => {
      setCurrentUser(user);
      navigate(PATHS.DASHBOARD.ROOT);
    });
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div>
          <label htmlFor="email" title="Email">
            <input id="email" type="email" value={email || ''} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
        <div>
          <label htmlFor="password" title="password">
            <input id="password" type="password" value={password || ''} onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>

        <div>
          <button onClick={login}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
