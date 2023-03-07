import './common/styles/colors.css';
import './index.css';
import './i18n';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './ContextProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastProvider } from 'react-toast-notifications';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <ToastProvider autoDismiss={true} autoDismissTimeout={3000} placement="top-center">
      <ContextProvider>
        <App />
      </ContextProvider>
    </ToastProvider>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
