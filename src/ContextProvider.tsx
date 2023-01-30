import React, { useEffect } from 'react';

import { api } from './api/api';
import { useNavigate } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { useTranslation } from 'react-i18next';

const { Provider } = React.createContext('current');

const ContextProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { addToast } = useToasts();

  useEffect(() => {
    api.errorMessage = (error: any) => {
      const messageKey = `errors.${error.status}`;
      const message = t(messageKey);
      if (message !== messageKey) addToast(message, { appearance: 'error' });
      console.error(error);
    };
    api.unauthorized = () => navigate('/login', { replace: true });
  }, []);

  return <Provider value={'current'}>{children}</Provider>;
};

export default ContextProvider;
