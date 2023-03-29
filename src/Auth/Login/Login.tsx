import { Button, Icon } from '../../common/components';

import { Link } from 'react-router-dom';
import { PATHS } from '../../common/constants/routes';
import React from 'react';
import style from './Login.module.css';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();
  return (
    <div className={style.loginSection}>
      <div className={style.loginContainer}>
        <span className={style.loginBg} />
        <div className={style.loginContent}>
          <div className={style.loginHeader}>
            <span className={style.text}>{t('Login')}</span>
          </div>
          <div className={style.loginBody}>
            <Link className={style.link} to={PATHS.AUTH.SIGN_IN}>
              <Button size="fullWidth">
                <span className={style.text}>{t('Login')}</span>{' '}
              </Button>
            </Link>
            <span className={style.copyright}>2022 © by Impegno.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
