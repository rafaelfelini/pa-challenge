import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import registerServiceWorker from './utils/registerServiceWorker';
import firebaseConnect from './utils/firebase-connect';

import './index.css';

// services
firebaseConnect();

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

// SW
registerServiceWorker();
