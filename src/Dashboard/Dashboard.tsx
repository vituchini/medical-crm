import { PATHS } from '../common/constants/routes';
import React from 'react';
import style from './style.module.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className={style.wrapper}>
      Dashboard
      <div>
        <button onClick={() => navigate(PATHS.LOGOUT)}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
