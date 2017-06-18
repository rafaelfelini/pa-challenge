import React from 'react';
import PropTypes from 'prop-types'
import Header from './Header';

const App = ({ children, isAuthenticated }) => (
  <div className="app">
    <Header isAuthenticated={isAuthenticated} />
    {children}
  </div>
);

App.propTypes = {
  isAuthenticated: PropTypes.bool
}

App.defaultProps = {
  isAuthenticated: false
}

export default App;
