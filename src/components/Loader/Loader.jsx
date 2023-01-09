import React from 'react';
import PropTypes from 'prop-types';
import './loader.scss';

export const Loader = props => (
  <div className={`nexi-loader ${props.dark ? 'dark-theme' : ''}`}>
    <div className="dot-container">
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
    </div>
  </div>
);

Loader.propTypes = {
  /**
   * Dark Background
   */
  dark: PropTypes.bool,
};

Loader.defaultProps = {
  dark: false
};
