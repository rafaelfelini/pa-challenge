import React from 'react';
import PropTypes from 'prop-types'

const Heading = ({ children, Element }) => (
  <div className="heading">
    <Element className="heading__text">
      {children}
    </Element>
  </div>
);

Heading.propTypes = {
  Element: PropTypes.string
}

Heading.defaultProps = {
  Element: 'h1'
}

export default Heading;
