import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import './assets/css/app.css';
import * as serviceWorker from './serviceWorker';

import { AuthProvider } from './providers/auth'
import Router from './router'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
