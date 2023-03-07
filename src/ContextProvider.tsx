import React, { useContext, useEffect, useState } from 'react';

import { PATHS } from './common/constants/routes';
import { User } from './models';
import { api } from './api/api';
import { useNavigate } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { useTranslation } from 'react-i18next';

const Context = React.createContext<any>(null);

export const ContextProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { addToast } = useToasts();
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    api.errorMessage = (error: any) => {
      const messageKey = `errors.${error.status}`;
      const message = t(messageKey);
      if (message !== messageKey) addToast(message, { appearance: 'error' });
      console.error(error);
    };
    api.unauthorized = () => navigate(PATHS.LOGOUT, { replace: true });
  }, []);

  return <Context.Provider value={{ currentUser, setCurrentUser }}>{children}</Context.Provider>;
};

export const useUserContext = () => useContext<{ currentUser: User; setCurrentUser: any }>(Context);
