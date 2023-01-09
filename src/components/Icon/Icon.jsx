import React from 'react';
import PropTypes from 'prop-types';
import './icon.scss';

export const Icon = ({ name, size, color, ...props })=> {

  return (
    <i
      className={`iconComponent ${name}`}
      style={{
        color: color,
        fontSize: size,
      }}
      {...props}
    />
  )
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};

Icon.defaultProps = {
  name:'',
  size: '',
  color: '',
};
