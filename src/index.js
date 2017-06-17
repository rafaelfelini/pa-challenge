import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import registerServiceWorker from './utils/registerServiceWorker';

import './index.css';

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

// SW
registerServiceWorker();
