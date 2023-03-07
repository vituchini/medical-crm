import { Navigate, Outlet } from 'react-router-dom';
import React, { useEffect } from 'react';

import { Loader } from './common/components';
import { PATHS } from './common/constants/routes';
import { User } from './models';
import { useUserContext } from './ContextProvider';

const PrivateRouter = ({ children }: any) => {
  const { currentUser, setCurrentUser } = useUserContext();

  useEffect(() => {
    if (!currentUser && window.token) User.me().then((user) => setCurrentUser(user));
  }, []);

  if (!window.token) return <Navigate to={PATHS.LOGOUT} />;

  return currentUser ? (
    currentUser.routeAccess ? (
      children ? (
        children
      ) : (
        <Outlet />
      )
    ) : (
      <Navigate to={currentUser.defaultRoute} />
    )
  ) : (
    <Loader />
  );
};

export default PrivateRouter;
