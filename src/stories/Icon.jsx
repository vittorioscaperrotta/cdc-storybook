import React from 'react';
import PropTypes from 'prop-types';
import './icon.scss';

export const Icon = ({ name, size, color, ...props })=> {

  return (
    <i className={`iconComponent ${[name]} ${[size]} ${[color]}`}
      {...props}
    />
  //color e font-size da passare come props
  // style in linea
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
