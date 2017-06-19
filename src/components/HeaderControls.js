import React from 'react';

const HeaderControls = ({ children }) => (
  <div className="header-controls">
    {children}
  </div>
);

const HeaderControlsSection = ({ children }) => (
  <div className="header-controls__section">
    {children}
  </div>
);

export {
  HeaderControls,
  HeaderControlsSection,
};
