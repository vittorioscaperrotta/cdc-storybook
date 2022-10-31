import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, disabled, ...props }) => {
  const mode = primary ? 'nexi-button--primary' : 'nexi-button--secondary';
  const status = disabled ? 'disabled' : '';
  return (
    <button
      type="button"
      className={['nexi-button', mode, status].join(' ') }
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * Button laberl
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Disabled
   */
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  disabled: false,
  onClick: undefined,
};
