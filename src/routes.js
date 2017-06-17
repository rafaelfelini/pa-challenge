import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';

const Routes = (props) => (
  <BrowserRouter {...props}>
    <App>
      <Route exact path="/" />
    </App>
  </BrowserRouter>
);

export default Routes;
