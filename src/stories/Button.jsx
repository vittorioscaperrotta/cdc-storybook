import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
import { Loader } from './Loader';

export const Button = ({ primary, dark, label, disabled, loading, ...props }) => {
  const mode = primary ? 'nexi-button--primary' : 'nexi-button--secondary';
  const status = disabled ? 'disabled' : '';
  const theme = dark ? 'dark-theme' : '';

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <button
          type="button"
          className={['nexi-button', mode, status, theme].join(' ')}
          {...props}
        >
          {label}
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page
   */
  primary: PropTypes.bool,
  /**
   * Button label
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
  /**
   * Dark Background
   */
  dark: PropTypes.bool,
  /**
   * Loading
   */
  loading: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
  disabled: false,
  onClick: undefined,
  dark: false,
  loading: false,
};
