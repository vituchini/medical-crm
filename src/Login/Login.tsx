import { Button, Icon } from '../common/components';

import React from 'react';
import style from './Login.module.css';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();
  return (
    <div className={style.loginContainer}>
      <span className={style.loginBg}> </span>
      <div className={style.loginContent}>
        <div className={style.loginHeader}>
          <span className={style.text}>{t('Login')}</span>
        </div>
        <div className={style.loginBody}>
          <Button size="fullWidth">
            <span className={style.text}>{t('Login')}</span>{' '}
          </Button>
          <span className={style.copyright}>2022 © by Impegno.</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
