import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import registerServiceWorker from './utils/registerServiceWorker';
import firebaseInitialize from './utils/data/initialize';

import './index.css';

// services
firebaseInitialize();

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

// SW
registerServiceWorker();
