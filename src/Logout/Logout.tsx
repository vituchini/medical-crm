import React, { useEffect } from 'react';

import { PATHS } from '../common/constants/routes';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../ContextProvider';

const Logout = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useUserContext();

  useEffect(() => {
    currentUser?.logout();
    setCurrentUser(null);
    navigate(PATHS.AUTH.LOGIN, { replace: true });
  }, []);

  return null;
};

export default Logout;
